import { Link } from "react-router-dom";

const LookingFor = () => {
    return (
        <div className="py-20 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
                <div>
                    <h2 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">What Are You Looking For?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Visit a Doctor Section */}
                    <div className="relative group rounded-lg overflow-hidden">
                        <img className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" 
                             src="https://i.ibb.co/vLHPmYK/pexels-tima-miroshnichenko-8376277.jpg" alt="Doctor" />
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center group-hover:scale-110 transition-transform duration-300">
                            <h3 className="text-white text-xl font-semibold mb-3">Visit a Doctor</h3>
                            <Link to="/doctor"
                                  className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
                                Book Now
                            </Link>
                        </div>
                    </div>

                    {/* Medical Section */}
                    <div className="relative group rounded-lg overflow-hidden">
                        <img className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                             src="https://i.ibb.co/tQ699pP/pexels-shvetsa-3845129.jpg" alt="Medical" />
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center group-hover:scale-110 transition-transform duration-300">
                            <h3 className="text-white text-xl font-semibold mb-3">Medical</h3>
                            <Link to="/doctor"
                                  className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
                                Book Now
                            </Link>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="relative group rounded-lg overflow-hidden">
                        <img className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                             src="https://i.ibb.co/KKf7Jky/pexels-mikhail-nilov-8942987.jpg" alt="Services" />
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center group-hover:scale-110 transition-transform duration-300">
                            <h3 className="text-white text-xl font-semibold mb-3">Services</h3>
                            <Link to="/doctor"
                                  className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookingFor;
