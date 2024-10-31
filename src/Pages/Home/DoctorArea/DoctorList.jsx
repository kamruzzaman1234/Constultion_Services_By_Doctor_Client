import { Link } from "react-router-dom";
import {FaArrowAltCircleRight, FaStar} from 'react-icons/fa'
import { TbCoinTaka } from "react-icons/tb";

const DoctorList = ({docList})=>{
    const {_id, name, title, location, image, description, medical_name, online_service_time,
         offline_service_time, price, rating, } = docList
    return(
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        {/* Image Carousel */}
        <div>
          <img src={image} alt={name} className="w-full h-[300px]"/>
        </div>
  
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2"> {title}</h2>
          <p className="text-gray-600 mb-4">{location}</p>
          <h2 className="text-[26px] flex text-blue-600 items-center mb-7 font-bold">
                        <TbCoinTaka/>{price}
                        <sub className="text-[16px] text-black mt-5">(Incl vat)</sub>
                    </h2>
                    <span className="text-black">Per Consultation</span>
          <p className="font-bold">{medical_name}</p>
          <div className="">
            <p className="">Online Service <span className="font-bold bg-green-400 text-white">
              {online_service_time}</span> </p>

              <p className="">Online Service <span className="font-bold bg-green-400 text-white">
              {online_service_time}</span> </p>

              <div className="my-2">
              <h2>Total Rating</h2>
                        <div className="flex ">
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <span className="font-bold">{rating}</span>
                        </div> 
              </div>
            
            
           
          </div>
          <p className="text-gray-700">{description.slice(0, 100)}...</p>
  
          {/* Favorite Button */}
          {/* <Map latitude={latitude} longitude={longitude} propertyName={name} /> */}
          <div className="flex justify-end">
          <Link to={`/viewDoctor/${_id}`} className="">
                  <FaArrowAltCircleRight className="text-[22px]
                   font-bold text-blue-500"></FaArrowAltCircleRight>
              </Link>
          </div>
        </div>
      </div>
    )
}
export default DoctorList;