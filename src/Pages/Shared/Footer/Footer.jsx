import { FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="py-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    
                    {/* About Section */}
                    <div className="text-center lg:text-left space-y-4">
                        <FaUserDoctor className="text-[60px] text-white"></FaUserDoctor>
                        <p className="text-gray-200 text-sm lg:text-base">
                            We offer expert consultation services to address health concerns, providing personalized
                            medical guidance, diagnosis, and treatment advice.
                        </p>
                    </div>
                    
                    {/* Specialties Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">Specialties</h2>
                        <ul className="text-sm lg:text-base space-y-3 text-gray-100">
                            <li>Neurology</li>
                            <li>Dentistry</li>
                            <li>Urology</li>
                            <li>Cardiology</li>
                        </ul>
                    </div>
                    
                    {/* Services Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">Services</h2>
                        <ul className="text-sm lg:text-base space-y-3 text-gray-100">
                            <li>Medical Consultation</li>
                            <li>Surgical Operations</li>
                            <li>Laboratory Services</li>
                            <li>ICU Facility</li>
                        </ul>
                    </div>
                    
                    {/* Contact Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">Contact Us</h2>
                        <ul className="space-y-3 text-sm lg:text-base text-gray-100">
                            <li className="flex items-center gap-2">
                                <FaLocationDot /> Dhaka, Gulshan
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> +0081935024654
                            </li>
                            <li className="flex items-center gap-2">
                                <MdMarkEmailUnread /> ke22@gmail.com
                            </li>
                        </ul>
                    </div>
                    
                    {/* Newsletter Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">Newsletter</h2>
                        <div className="relative mb-6">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full py-2 pl-4 pr-24 rounded-lg bg-white text-gray-700"
                            />
                            <button className="absolute right-0 top-0 bottom-0 px-4 bg-blue-800 hover:bg-blue-700 text-white rounded-r-lg">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex gap-4 justify-center lg:justify-start text-blue-100">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="hover:text-white transition" />
                            </a>
                            <a href="mailto:ke22@gmail.com" target="_blank" rel="noopener noreferrer">
                                <MdMarkEmailUnread className="hover:text-white transition" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="hover:text-white transition" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-white transition" />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Footer Bottom */}
                <div className="text-center mt-12 text-gray-300 text-sm">
                    © {new Date().getFullYear()} Consultation Services by Doctors. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
