import ReactStars from "react-rating-stars-component";
import React from "react";
import { FaStar } from "react-icons/fa";
import { TbCoinTaka } from "react-icons/tb";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const DoctorInfo = ({doctor})=>{
    
    const { _id,image, name, title, description, medical_name,
        price, rating, location, join_time,  online_service,
         experience, offline_service} = doctor
         const ratingChanged = (newRating) => {
            console.log(newRating);
          };

         

          // Catch Rating value
         
    return(
        <div className="bg-white shadow-lg p-3 flex flex-col lg:flex-row justify-between items-center">
            <div className="flex gap-10 w-[100%] lg:w-[28%] lg:shadow-lg p-4">
                <div>
                    <img src={image} alt={name} className="w-[140px]
                     h-[130px] rounded-lg"/>
                </div>
                <div>
                    <h2 className="font-bold">{name}</h2>
                    <span className="text-[14px]">Specialites</span>
                    <h3 className="font-semibold">{title}</h3>
                    <div>
                        <h4 className="">Total Experience</h4>
                        <h2 className="font-bold">{experience}+ Years Experience</h2>
                    </div>
                </div>
            </div>
            <div className="w-[100%] lg:w-[28%] mt-5 lg:mt-0 lg:shadow-lg p-4">
                <div className="flex flex-col">
                <h2 className="text-[17px] text-semibold">Works in</h2>
                <span className="text-[18px] font-bold text-justify">{medical_name}</span>
                <span>{location}</span>
                </div>
                <div className="flex gap-10 items-center my-2">
                    <div>
                        <h4 className="">Total Experience</h4>
                        <h2 className="font-bold">{experience}+ Years Experience</h2>
                    </div>
                    <div className="">
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
            </div>
            <div className="w-[100%] lg:w-[30%] rounded-lg  lg:bg-gray-100 text-center h-full py-4">
                <div className="flex flex-col justify-center items-center text-center">
                    <h2 className="text-[36px] flex text-blue-600 items-center  font-bold">
                        <TbCoinTaka/>{price}
                        <sub className="text-[16px] text-black mt-5">(Incl vat)</sub>
                    </h2>
                    <span className="text-black">Per Consultation</span>

                </div>
                <div className="flex justify-end mr-10">
                        <Link to={`/viewDoctor/${_id}`} className="text-[20px] font-bold">
                        <FaCircleArrowRight className="text-[30px] font-bold text-blue-600"
                        /></Link>
                </div>
            </div>
        </div>
    )
}
export default DoctorInfo;