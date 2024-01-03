// Contact.tsx
import React, { useState } from 'react';
import contactImage from '../assets/contactus.png';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Contact: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle the form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="container mx-auto">
            <div className=' bg-white shadow-md rounded-xl flex contain' >
                <form onSubmit={handleSubmit} className="max-w-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 w-full md:w-96 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 w-full md:w-96 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">
                            Contact No
                        </label>
                        <input
                            type="text"
                            id="Contact"
                            name="Contact"
                            value={formData.Contact}
                            onChange={handleChange}
                            className="p-2 w-full md:w-96 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="p-2 w-full md:w-96 border border-gray-300 rounded"
                            rows={4}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 w-full text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>

                {/* Image on the right side */}
                <div className="flex-shrink-0 ml-8 w-80 h-80 flex flex-col items-center justify-center">
                    <h3 className='text-blue text-3xl font-bold mb-4 mt-4'>Get in touch</h3>
                    <img src={contactImage} alt="Contact" className="rounded-lg w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
