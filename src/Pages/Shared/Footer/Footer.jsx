import { FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {/* About Section */}
                    <div className="space-y-3 px-8 py-4 flex justify-center items-center flex-col rounded-lg">
                        <img
                            src="https://i.ibb.co.com/m96f4Jc/1000-F-171982214-jxv-G1gs-LCVuvdx3rd9kk-FAWMz-Ok098qj.jpg"
                            alt=""
                            className="w-[170px] h-[160px] rounded-md"
                        />
                        <p className="text-gray-700 text-center">
                            Consultation services by doctors offer personalized medical guidance,
                            diagnosis, and treatment advice to address patients' health concerns.
                        </p>
                    </div>

                    {/* Specialties Section */}
                    <div className="px-8 py-4 rounded-lg">
                        <h2 className="text-[22px] font-bold mb-8 text-black">Specialties</h2>
                        <ul className="text-[16px] font-semibold space-y-3 text-gray-700">
                            <li>Neurology</li>
                            <li>Dentist</li>
                            <li>Urology</li>
                            <li>Cardiology</li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="px-8 py-4 rounded-lg">
                        <h2 className="text-[22px] font-bold mb-8 text-black">Services</h2>
                        <ul className="text-[16px] font-semibold space-y-3 text-gray-700">
                            <li>Medical</li>
                            <li>Operation</li>
                            <li>Laboratory</li>
                            <li>ICU</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="px-8 py-4 rounded-lg">
                        <h2 className="text-[22px] font-bold mb-8 text-black">Contact Us</h2>
                        <ul className="text-[16px] font-semibold space-y-3 text-gray-700">
                            <li className="flex gap-2 items-center">
                                <FaLocationDot /> Dhaka, Gulshan
                            </li>
                            <li className="flex gap-2 items-center">
                                <FaPhoneAlt /> +0081935024654
                            </li>
                            <li className="flex gap-2 items-center">
                                <MdMarkEmailUnread /> ke22@gmail.com
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="px-8 py-4 rounded-lg">
                        <h2 className="text-[22px] font-bold mb-8 text-black">Newsletter</h2>
                        <div className="join mb-4 relative">
                           <input type="text"  placeholder="Enter Email" className="input input-bordered"/>
                           <button className="input input-bordered bg-blue-700 text-white absolute right-0">Search</button>
                        </div>
                        <div className="flex gap-4 text-blue-700 text-xl justify-center">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="mailto:ke22@gmail.com" target="_blank" rel="noopener noreferrer">
                                <MdMarkEmailUnread />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
