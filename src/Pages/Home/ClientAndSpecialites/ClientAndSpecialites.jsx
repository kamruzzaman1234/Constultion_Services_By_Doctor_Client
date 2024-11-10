import { GiStomach, GiBrain } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { PiBrainThin } from "react-icons/pi";

const ClientAndSpecialites = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Title and Description */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Client and Specialities</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Our clients trust us for expertise and reliability. Our team offers specialized care across a variety of fields to ensure we meet all healthcare needs.</p>
                </div>
                
                {/* Specialities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {[
                        { icon: GiStomach, title: "Cardiologist" },
                        { icon: FaUserDoctor, title: "Dentist" },
                        { icon: GrTest, title: "Laboratory" },
                        { icon: GiBrain, title: "Neurology" },
                        { icon: PiBrainThin, title: "Ophthalmology" },
                    ].map((specialty, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105">
                            <div className="w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-6">
                                <specialty.icon className="text-5xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{specialty.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientAndSpecialites;
