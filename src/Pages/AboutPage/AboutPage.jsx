// src/pages/AboutPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TbBrandBooking } from "react-icons/tb";
import { FaUserDoctor, FaClipboardList, FaQuoteLeft } from "react-icons/fa6";

const AboutPage = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const mockData = {
            introduction: "Our consultation service connects patients with certified and experienced doctors.",
            mission: "To provide accessible and quality healthcare advice.",
            vision: "To lead the industry with innovation and trust.",
            missionImage: "https://i.ibb.co/p2wk5zT/istockphoto-823928832-612x612.jpg",
            visionImage: "https://i.ibb.co/tLZ8M6n/images.jpg",
            team: [
                { name: "Dr. Sarah", role: "Cardiologist", photo: "https://i.ibb.co/0r4yvGQ/pexels-carmel-nsenga-735492-19218034.jpg", bio: "Experienced cardiologist with 10 years of practice." },
                { name: "Dr. John", role: "Neurologist", photo: "https://i.ibb.co/zGrXRhK/pexels-tessy-agbonome-521343232-18828741.jpg", bio: "Specialist in neurological disorders." },
                { name: "Dr. Emily", role: "Pediatrician", photo: "https://i.ibb.co.com/fXQwFfL/pexels-byb-byb-412101727-19471016.jpg", bio: "Focused on children’s health and wellness." },
                { name: "Dr. Alex", role: "Dermatologist", photo: "https://i.ibb.co.com/zH4Svtw/pexels-carmel-nsenga-735492-18788957.jpg", bio: "Expert in skin care and treatment." }
            ],
            testimonials: [
                { client: "Jane Doe", message: "Exceptional service and friendly staff!" },
                { client: "John Smith", message: "The consultation was quick and helpful." }
            ],
            faq: [
                { question: "How do I book an appointment?", answer: "Simply register and choose a doctor to book." },
                { question: "Is my information secure?", answer: "Yes, we prioritize your privacy and confidentiality." }
            ],
            contactInfo: "Email: info@consultationservice.com | Phone: +1234567890"
        };
        setAboutData(mockData);
    }, []);

    if (!aboutData) {
        return <div className="text-center py-10">Loading About Information...</div>;
    }

    const { introduction, mission, vision, missionImage, visionImage, team, testimonials, faq, contactInfo } = aboutData;

    return (
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white text-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Introduction */}
                <section className="mb-16 text-center">
                    <h1 className="text-5xl font-bold text-indigo-800 mb-4">About Our Consultation Services</h1>
                    <p className="text-lg text-gray-600">{introduction}</p>
                </section>

                {/* Mission and Vision */}
                <section className="mb-16 grid gap-8 grid-cols-1 lg:grid-cols-2">
                    {[{ title: 'Our Mission', content: mission, image: missionImage }, { title: 'Our Vision', content: vision, image: visionImage }].map((item, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={item.image} alt={item.title} className="w-full h-72 object-cover rounded-lg transform group-hover:scale-110 transition duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-80 group-hover:opacity-90 transition duration-300">
                                <div className="absolute bottom-0 p-6 text-white">
                                    <h2 className="text-3xl font-semibold">{item.title}</h2>
                                    <p className="mt-2 text-base">{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Key Features */}
                <section className="mb-16 py-10 bg-gradient-to-br from-blue-800 to-indigo-600 text-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {[{ icon: TbBrandBooking, title: "Get Booking" },{ icon: TbBrandBooking, title: "Get Booking" }, { icon: FaUserDoctor, title: "View Doctor" }, { icon: FaClipboardList, title: "Consultation List" }].map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center bg-white bg-opacity-10 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                <feature.icon className="text-5xl mb-4" />
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Professional Team */}
                <section className="mb-16 py-12 bg-gradient-to-r from-indigo-100 to-purple-50 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Meet Our Professional Team</h2>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {team.map((member, idx) => (
                            <div key={idx} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                                <img src={member.photo} alt={member.name} className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-800 mb-4" />
                                <h3 className="text-xl font-semibold text-indigo-800">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                <p className="mt-2 text-gray-500">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-16 py-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Client Testimonials</h2>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="relative text-center bg-white p-8 rounded-lg shadow-lg">
                                <FaQuoteLeft className="text-3xl text-indigo-700 mb-4 mx-auto" />
                                <p className="text-gray-700 mb-2">"{testimonial.message}"</p>
                                <p className="text-indigo-700 font-semibold">- {testimonial.client}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16 py-12 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faq.map((item, idx) => (
                            <div key={idx} className="p-4 bg-gray-100 rounded-lg shadow">
                                <h3 className="text-lg font-semibold text-indigo-800">{item.question}</h3>
                                <p className="mt-2 text-gray-600">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Information */}
                <section className="text-center py-10 bg-blue-700 bg-opacity-40 text-white rounded-lg">
                    <h2 className="text-3xl font-bold -800 mb-4">Contact Us</h2>
                    <p>{contactInfo}</p>
                </section>

            </div>
        </div>
    );
};

export default AboutPage;
