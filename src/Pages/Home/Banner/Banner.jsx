import { Link } from "react-router-dom";
import Filter from "./Filter";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = ()=>{
    return(
        <div className="py-[150px]" 
        style={{backgroundImage:
        "url('https://i.ibb.co.com/ckPVxPF/pexels-negativespace-48603.jpg')", 
        backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundAttachment:'fixed',
         backgroundPosition:"center center"}}>
            <div className="max-w-7xl mx-6 lg:mx-auto">
                <div className="text-center">
                    <h2 className="text-[46px] font-bold">Search Doctor Make and Appointment</h2>
                    <p className="text-[20px]">Discover the best doctors clients and hospital the city nearest to you.</p>
                </div>
                <div className="mt-10 flex justify-center items-center">
                    {/* <div className="flex flex-col lg:flex-row  justify-center items-center gap-8">
                        <div className="bg-white flex justify-between px-4 py-4 w-full rounded-lg ">
                            <label htmlFor="location">Select Your Location</label>
                            <select name="" id="" className="outline-none">
                                <option value=""></option>
                                <option value="dhaka">Dhaka</option>
                                <option value="rangpur">Rangpur</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="khulna">Khulna</option>
                                <option value="chattagram">Chattagram</option>
                                <option value="Syhlet">Syhlet</option>
                            </select>
                        </div>
                        <div className="bg-white px-4 py-4 w-full  rounded-lg ">
                            
                            <input type="text" className="outline-none w-full"
                             placeholder="Search Doctor Client etc " />
                        </div>
                        <div className="px-8 py-3 rounded-lg bg-blue-700">
                            <input type="submit" className=" text-white
                             font-bold " value="Search"/>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div> */}
                   <div className="bg-blue-800 flex justify-center items-center rounded-full">
                        
                        
                        <Link to="/doctor" className=" text-center px-14 flex items-center gap-2 justify-center
                         py-4 font-bold text-white text-[26px]"><FaArrowAltCircleRight className=""></FaArrowAltCircleRight> Choose Doctor and Booking</Link>
                   </div>
                </div>
             </div>
         </div>
    )
}
export default Banner;