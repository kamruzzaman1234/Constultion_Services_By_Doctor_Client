import { Link } from "react-router-dom";
import Filter from "./Filter";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = ()=>{
    return(
        <div className="relative ">
                <div className="">
                    <img src="https://i.ibb.co.com/RSJRCkJ/pexels-chokniti-khongchum-1197604-2280549.jpg" alt="" className="w-full  h-[700px]"/>
                </div>
            <div className="max-w-7xl mx-6 lg:mx-auto">
            <div className="absolute inset-0 bg-white opacity-80 rounded-lg"></div>
                <div className="absolute inset-0  flex flex-col justify-center items-center">
                <div className="text-center">
                    <h2 className="text-[46px] font-bold">Search Doctor Make and Appointment</h2>
                    <p className="text-[20px]">Discover the best doctors clients and hospital the city nearest to you.</p>
                </div>
                <div className="mt-10 flex justify-center items-center">
                   
                   <div className="bg-blue-800 flex justify-center items-center rounded-full">
                        
                        
                        <Link to="/doctor" className=" text-center px-14 flex items-center gap-2 justify-center
                         py-4 font-bold text-white text-[26px]"><FaArrowAltCircleRight className=""></FaArrowAltCircleRight> Choose Doctor and Booking</Link>
                   </div>
                </div>
                </div>
                
             </div>
         </div>
    )
}
export default Banner;