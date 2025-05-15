import React from 'react';

const Aboutus = () => {
    return (
        <div className="container mx-auto py-24 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">About CamSecure</h1>
            
            <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                    Founded in 2015, CamSecure has grown to become a trusted leader in security solutions. 
                    Our mission is to provide reliable, innovative, and affordable security systems that give 
                    our clients peace of mind.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
                <p className="mb-6">
                    To be the premier provider of comprehensive security solutions, recognized for our 
                    technical excellence, exceptional service, and commitment to customer satisfaction.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
                <p className="mb-6">
                    Our team consists of certified security professionals with extensive experience in 
                    the industry. Each technician undergoes rigorous training to ensure they can handle 
                    installations of all complexities and provide top-tier service.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
                <p>
                    At CamSecure, we're committed to:
                </p>
                <ul className="list-disc pl-8 mt-2 mb-6">
                    <li>Using only the highest quality equipment</li>
                    <li>Providing transparent pricing with no hidden fees</li>
                    <li>Delivering excellent customer service</li>
                    <li>Staying updated with the latest security technologies</li>
                    <li>Adapting our solutions to meet your specific needs</li>
                </ul>
            </div>
        </div>
    );
}

export default Aboutus;