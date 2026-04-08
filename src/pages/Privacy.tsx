import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Effective Date: April 8, 2026. This Privacy Policy describes how Interdot
                collects, uses, discloses, sells, shares, and protects personal data in
                connection with our websites, applications, products, and B2B data services.
              </p>
            </motion.div>

            <div className="space-y-12 text-gray-700">
              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">1. Scope</h2>
                <p className="leading-relaxed">
                  This Privacy Policy applies to personal data we process as a controller
                  or business, including data we collect directly, receive from business
                  partners, infer from usage, and license from third-party data sources.
                  It covers visitors, customers, prospects, and business contacts.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">2. Data We Collect</h2>
                <p className="leading-relaxed mb-3">
                  Depending on your relationship with us, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                  <li>
                    Identifiers and contact data (name, business email, phone, job title,
                    company, online identifiers).
                  </li>
                  <li>
                    Professional and commercial information (industry, company size, buying
                    signals, service interests, transaction history).
                  </li>
                  <li>
                    Internet or network activity (IP address, browser type, device details,
                    pages viewed, referral URLs, timestamps, event logs).
                  </li>
                  <li>
                    Inferences and audience attributes used for analytics, segmentation,
                    attribution, and campaign optimization.
                  </li>
                  <li>
                    Compliance and security records (consent preferences, suppression lists,
                    audit logs, abuse detection and fraud-prevention signals).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">3. Sources of Data</h2>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                  <li>Directly from you when you submit forms, request demos, or contact us.</li>
                  <li>Automatically through cookies, pixels, and similar technologies.</li>
                  <li>From customers and partners who provide records under contract.</li>
                  <li>From licensed providers and publicly available business sources.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">4. How We Use Data</h2>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                  <li>Provide, operate, and improve our products and B2B data services.</li>
                  <li>Deliver analytics, audience insights, and performance reporting.</li>
                  <li>Support sales, outreach, customer success, and account management.</li>
                  <li>Personalize content, measure engagement, and optimize campaigns.</li>
                  <li>Prevent abuse, secure systems, detect fraud, and enforce contracts.</li>
                  <li>Comply with legal obligations and respond to lawful requests.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">5. Sale and Sharing of Data</h2>
                <p className="leading-relaxed mb-3">
                  We may sell or share certain business contact and company-level data to
                  qualified partners, customers, and service recipients for permitted B2B
                  marketing, analytics, and measurement use cases. Such disclosures may be
                  considered a sale or sharing under certain laws.
                </p>
                <p className="leading-relaxed">
                  We do not knowingly sell personal data of individuals where prohibited by
                  law. Where required, we provide rights to opt out of sale or sharing.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">6. Legal Bases</h2>
                <p className="leading-relaxed">
                  Where applicable, we rely on one or more legal bases: contract
                  performance, legitimate interests, consent, and legal obligation.
                  Legitimate interests include maintaining and improving services, growing
                  our business responsibly, and securing our systems.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">7. Snowflake-Compatible Security and Governance</h2>
                <p className="leading-relaxed mb-3">
                  Our processing controls are designed to align with enterprise data
                  governance standards and Snowflake-compatible operational practices:
                </p>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                  <li>Role-based access control and least-privilege authorization.</li>
                  <li>Environment segregation and restricted production access.</li>
                  <li>Encryption in transit and at rest using industry-standard methods.</li>
                  <li>Comprehensive query and access logging for auditability.</li>
                  <li>Controlled data sharing, contractual use restrictions, and monitoring.</li>
                  <li>Retention limits, deletion workflows, and incident response procedures.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="leading-relaxed">
                  We and our partners use cookies, SDKs, and similar technologies for site
                  functionality, analytics, attribution, and advertising. You can manage
                  cookie preferences through your browser settings and, where available, our
                  consent controls.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">9. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the
                  purposes described in this policy, unless a longer period is required or
                  permitted by law. Retention depends on business need, legal requirements,
                  contractual terms, and security considerations.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">10. International Transfers</h2>
                <p className="leading-relaxed">
                  We may process data in countries other than your own. Where required, we
                  implement appropriate safeguards for international transfers, such as
                  contractual protections and security controls.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">11. Your Privacy Rights</h2>
                <p className="leading-relaxed mb-3">
                  Depending on your jurisdiction, you may have rights to:
                </p>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                  <li>Request access to personal data we hold about you.</li>
                  <li>Request correction of inaccurate or incomplete data.</li>
                  <li>Request deletion of eligible personal data.</li>
                  <li>Request portability where applicable.</li>
                  <li>Opt out of sale, sharing, or targeted advertising where applicable.</li>
                  <li>Limit or object to certain processing in specific circumstances.</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  To submit a request, contact us using the details below. We may verify
                  your identity before processing your request.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">12. Third-Party Links and Services</h2>
                <p className="leading-relaxed">
                  Our services may contain links to third-party websites or integrations.
                  We are not responsible for the privacy practices of those third parties.
                  Review their privacy policies before providing personal data.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">13. Children&apos;s Privacy</h2>
                <p className="leading-relaxed">
                  Our services are intended for business users and are not directed to
                  children. We do not knowingly collect personal data from children where
                  prohibited by law.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">14. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. When we do, we will
                  revise the effective date and post the updated policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">15. Contact Us</h2>
                <p className="leading-relaxed">
                  For privacy inquiries, rights requests, or data protection concerns,
                  contact us at <a href="mailto:privacy@interdot.example" className="text-primary underline">privacy@interdot.example</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
