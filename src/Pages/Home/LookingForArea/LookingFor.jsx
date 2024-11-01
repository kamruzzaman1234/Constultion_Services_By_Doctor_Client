import { Link } from "react-router-dom";

const LookingFor  =()=>{
    return(
        <div className="py-20">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
                <div>
                    <h2 className="text-[26px] font-bold text-center mb-12">What Are You Looking For</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="relative inline-block">
                        <div className="">
                            <img className="rounded-lg opacity-90"
                            src="https://i.ibb.co.com/vLHPmYK/pexels-tima-miroshnichenko-8376277.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                        <div className="absolute inset-0  flex flex-col justify-center items-center">
                            <h3 className="font-bold text-white text-[18px] mb-2">Visit a Doctor</h3>
                            <Link to="/doctor"
                            className="bg-blue-600 text-white 
                            py-2 px-4 rounded-lg font-bold hover:bg-blue-700 transition">Booking Now</Link>
                        </div>
                    </div>
                    <div className="relative inline-block">
                        <div className="">
                            <img className="rounded-lg opacity-90"  
                            src="https://i.ibb.co.com/tQ699pP/pexels-shvetsa-3845129.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                        <div className="absolute inset-0  flex flex-col justify-center items-center">
                            <h3 className="font-bold text-white text-[18px] mb-2">Medical</h3>
                            <Link to="/doctor"
                            className="bg-blue-600 text-white 
                            py-2 px-4 rounded-lg font-bold hover:bg-blue-700 transition">Booking Now</Link>
                        </div>
                    </div>
                    <div className="relative inline-block">
                        <div className="">
                            <img className="rounded-lg opacity-90"
                            src="https://i.ibb.co.com/KKf7Jky/pexels-mikhail-nilov-8942987.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                        <div className="absolute inset-0  flex flex-col justify-center items-center">
                            <h3 className="font-bold text-white text-[18px] mb-2">Services</h3>
                            <Link to="/doctor"
                            className="bg-blue-600 text-white 
                            py-2 px-4 rounded-lg font-bold hover:bg-blue-700 transition">Booking Now</Link>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default LookingFor;