import React from "react";
import { FaHouseMedicalFlag, FaPumpMedical, FaBedPulse } from "react-icons/fa6";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { TbMedicineSyrup } from "react-icons/tb";
import { GrDocumentTest } from "react-icons/gr";

const ExtraFeature = () => {
    return (
        <div className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Title and Description */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">Available Features in Our Clinic</h2>
                    <p className="text-lg text-gray-600">Our clients trust us for expertise and reliability in delivering solutions that meet their needs.</p>
                </div>
                
                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <FaHouseMedicalFlag />, title: "Medical", bg: "from-green-400 to-green-500" },
                        { icon: <LiaFileMedicalAltSolid />, title: "Operation", bg: "from-red-400 to-red-500" },
                        { icon: <TbMedicineSyrup />, title: "Laboratory", bg: "from-yellow-400 to-yellow-500" },
                        { icon: <FaPumpMedical />, title: "ICU", bg: "from-purple-400 to-purple-500" },
                        { icon: <GrDocumentTest />, title: "Test Room", bg: "from-blue-400 to-blue-500" },
                        { icon: <FaBedPulse />, title: "Patient Room", bg: "from-pink-400 to-pink-500" },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className={`p-10 rounded-lg shadow-lg bg-gradient-to-r ${feature.bg} transform transition-transform hover:scale-105 text-center flex flex-col items-center`}
                        >
                            <div className="text-white mb-6">
                                {React.cloneElement(feature.icon, { className: "text-5xl" })}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExtraFeature;
