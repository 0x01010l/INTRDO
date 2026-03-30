import React from 'react';
import './Services.css';

const services = [
    {
        id: 1,
        name: 'Lead Generation',
        description: 'We help you generate leads effectively.',
        image: ['https://i.postimg.cc/fVcnD4w5/image.jpg', 'https://i.postimg.cc/hJKFGCvG/image.jpg', 'https://i.postimg.cc/v1GRmPTT/image.jpg'],
    },
    {
        id: 2,
        name: 'Partnerships',
        description: 'We build strong partnerships.',
        image: [
            'https://i.postimg.cc/xyz12345/image1.jpg', 
            'https://i.postimg.cc/xyz12345/image2.jpg', 
            'https://i.postimg.cc/xyz12345/image3.jpg', 
        ],
    },
    {
        id: 3,
        name: 'Growth Systems',
        description: 'We implement growth strategies.',
        image: [
            'https://i.postimg.cc/abc67890/image1.jpg', 
            'https://i.postimg.cc/abc67890/image2.jpg', 
            'https://i.postimg.cc/abc67890/image3.jpg', 
        ],
    },
];

const Services = () => {
    return (
        <div className="services">
            {services.map(service => (
                <div key={service.id} className="service">
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <div className="service-images">
                        {service.image.map((imgUrl, index) => (
                            <img key={index} src={imgUrl} alt={service.name} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;