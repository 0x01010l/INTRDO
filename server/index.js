import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { EmailClient } from '@azure/communication-email';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const CONNECTION_STRING = process.env.AZURE_COMMUNICATION_SERVICES_CONNECTION_STRING || '';
const SENDER = process.env.ACS_SENDER_EMAIL || '';
const RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL || '';

if (!CONNECTION_STRING || !SENDER || !RECIPIENT) {
  console.warn('Missing ACS env vars. Set AZURE_COMMUNICATION_SERVICES_CONNECTION_STRING, ACS_SENDER_EMAIL, CONTACT_RECIPIENT_EMAIL');
}

const client = CONNECTION_STRING ? new EmailClient(CONNECTION_STRING) : null;

// Simple in-memory rate limiter per IP
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = Number(process.env.CONTACT_RATE_LIMIT_PER_MIN || 10);
const ipMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipMap.get(ip) || [];
  const filtered = entry.filter((t) => now - t <= WINDOW_MS);
  filtered.push(now);
  ipMap.set(ip, filtered);
  return filtered.length > MAX_REQUESTS;
}

app.post('/api/contact', async (req, res) => {
  try {
    const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';

    if (isRateLimited(ip)) {
      return res.status(429).json({ error: 'Too many requests, try again later' });
    }

    const { firstName, lastName, email, company, message, honeypot } = req.body || {};

    // Honeypot
    if (honeypot) {
      return res.status(200).json({ ok: true });
    }

    if (!email || !message) {
      return res.status(400).json({ error: 'Missing required fields (email and message)' });
    }

    if (!client) {
      console.error('Email client not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const subject = `Contact form: ${[firstName, lastName].filter(Boolean).join(' ') || email}`;
    const plainText = [
      `From: ${[firstName, lastName].filter(Boolean).join(' ')}`,
      `Email: ${email}`,
      `Company: ${company || ''}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const emailMessage = {
      sender: SENDER,
      content: {
        subject,
        plainText,
        html: `<pre style="white-space:pre-wrap;font-family:inherit;">${plainText}</pre>`,
      },
      recipients: {
        to: [{ address: RECIPIENT }],
      },
    };

    const poller = await client.beginSend(emailMessage);
    const result = await poller.pollUntilDone();

    console.log('ACS send result', result);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Send error', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/health', (_req, res) => res.send('ok'));

app.listen(PORT, () => {
  console.log(`Contact API server listening on port ${PORT}`);
});
