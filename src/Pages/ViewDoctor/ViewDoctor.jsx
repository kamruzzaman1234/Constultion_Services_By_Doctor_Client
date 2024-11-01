import { Link, useLoaderData } from "react-router-dom";
import { TbCoinTaka } from "react-icons/tb";
import { FaArrowCircleRight } from "react-icons/fa";
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating';
import { FaStar } from "react-icons/fa";

const ViewDoctor = ()=>{
    
    
         const allDoctorData = useLoaderData()
         const {image, name, title, _id, description, medical_name,
            price, rating, location, join_time,  online_service_time,
             experience, offline_service_time} = allDoctorData
            
             
         
         
    return(
        <div className="py-10 bg-slate-100">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex gap-5 lg:gap-10">
                        <div className="border-2 border-blue-200 rounded-lg">
                            <img src={image} alt={title} className="w-[200px]
                             h-[200px] p-2 rounded-lg"/>
                        </div>
                        <div className="">
                            <h2 className="text-[20px] font-bold">{name}</h2>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <h4>Works In <b className="text-[18px]">{medical_name}</b> </h4>
                            <div>
                                <h2 className="text-[18px] font-bold">Service Time</h2>
                                <h4 className="font-medium lg:font-bold flex flex-col  my-1  lg:flex-row">Online Service:  <span className="font-bold text-[18px] bg-blue-800 px-2 rounded-lg text-white">{online_service_time}</span> </h4>
                                <h4 className="font-medium lg:font-bold flex flex-col  my-1 lg:flex-row">Offline Service: <span className="font-bold text-[18px] bg-blue-800 px-2 rounded-lg text-white">{offline_service_time}</span> </h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="my-8 lg:my-0">
                            <h2 className="text-[26px] font-bold">Consultation Fee</h2>
                            <h2 className="text-[36px] font-bold flex items-center text-blue-600"> 
                                <TbCoinTaka/> <span>{price}</span>
                                <sub className="text-[14px] text-black mt-5 font-bold">(Incl vat)</sub>
                            </h2>
                            <Link to={`/bookingDoctor/${_id}`} 
                            className="flex items-center my-3 bg-blue-800 text-white
                            justify-center py-2 gap-2 font-bold rounded-full"> <FaArrowCircleRight/> Booking Now </Link>     
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row my-6 bg-block py-2 gap-6 lg:gap-16">
                    <div>
                        <h3 className="text-[18px] font-medium">Total Experience</h3>
                        <h2 className="text-[20px] font-bold">{experience}+ Years</h2>
                    </div>
                    <div>
                    <h3 className="text-[18px] font-medium">Joined Doctime</h3>
                    <h2 className="text-[20px] font-bold">{join_time}</h2>
                    </div>
                    <div>
                    <h3 className="text-[18px] font-medium">Total Rating</h3>
                    
                    <div className="flex ">
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <span className="font-bold">{rating}</span>
                        </div> 
                    
                    </div>
                    <div>
                    <h3 className="text-[18px] font-medium">Works In</h3>
                    <h2 className="text-[20px] font-bold">{medical_name}</h2>
                    </div>
                </div>
            </div>
    </div>
    )
}
export default ViewDoctor;