import React from "react";
import { ImHappy } from "react-icons/im";
import { RiProjectorLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";

const OverView = () => {
    return (
        <div className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
                    <p className="text-lg text-blue-200">We take pride in our accomplishments and are committed to delivering outstanding service to our clients.</p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <ImHappy />, number: "3500+", label: "Happy Customers", color: "bg-yellow-400" },
                        { icon: <RiProjectorLine />, number: "460+", label: "Projects Done", color: "bg-purple-400" },
                        { icon: <FaAward />, number: "40+", label: "Awards", color: "bg-green-400" },
                        { icon: <GrWorkshop />, number: "440+", label: "Client Works", color: "bg-pink-400" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-center flex flex-col items-center">
                            <div className={`${stat.color} w-20 h-20 flex items-center justify-center rounded-full text-white mb-6`}>
                                {React.cloneElement(stat.icon, { className: "text-4xl" })}
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-800">{stat.number}</h2>
                            <span className="mt-2 text-lg font-semibold text-gray-600">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OverView;
