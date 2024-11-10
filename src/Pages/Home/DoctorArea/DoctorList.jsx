import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { TbCoinTaka } from "react-icons/tb";

const DoctorList = ({ docList }) => {
    const { _id, name, title, location, image, description, medical_name, online_service_time, offline_service_time, price, rating } = docList;
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
                <img src={image} alt={name} className="w-full h-[250px] object-cover" />
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">{title}</h2>
                <p className="text-sm text-gray-500 mb-4">{location}</p>
                
                <div className="flex items-center text-blue-600 font-bold text-[24px] mb-4">
                    <TbCoinTaka className="mr-1" />
                    {price}
                    <sub className="text-sm text-gray-500 ml-1">(Incl VAT)</sub>
                </div>
                
                <span className="text-xs font-medium text-gray-600 mb-2 block">Per Consultation</span>
                <p className="text-gray-700 font-medium mb-4">{medical_name}</p>

                <div className="text-gray-600 mb-4">
                    <p className="flex items-center justify-between">
                        Online Service: <span className="font-semibold text-green-500 bg-green-100 px-2 py-1 rounded">{online_service_time}</span>
                    </p>
                    <p className="flex items-center justify-between">
                        Offline Service: <span className="font-semibold text-green-500 bg-green-100 px-2 py-1 rounded">{offline_service_time}</span>
                    </p>
                </div>

                <div className="flex items-center mb-4">
                    <h2 className="text-sm font-semibold text-gray-700 mr-2">Rating:</h2>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"} />
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 ml-2">{rating}</span>
                </div>

                <p className="text-gray-600 mb-4">{description.slice(0, 100)}...</p>
                
                <div className="flex justify-end">
                    <Link to={`/viewDoctor/${_id}`} className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110">
                        <FaArrowAltCircleRight className="text-3xl" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorList;
