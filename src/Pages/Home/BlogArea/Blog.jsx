import { Link } from "react-router-dom";

const Blog = ()=>{
    return(
        <div className="py-20 bg-blue-100">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
            <div className="mb-12">
                    <h2 className="text-[26px] font-bold text-center">Blog And News</h2>
                    <p className="text-center">Clients are individuals or businesses that use your They trust you for your expertise, <br /> reliability,
                     and value in delivering solutions that meet their needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className=" bg-white p-6 shadow-lg relative">
                        <div className="flex justify-center items-center ">
                        <img 
                        src="https://i.ibb.co.com/C6Psx6w/pexels-gustavo-fring-4173251.jpg"
                         alt="" className="w-[400px] h-[300px] rounded-lg"/>
                        </div>
                        <div className="space-y-5 mt-3">
                        <span>Client</span>
                        <h2 className="text-[18px] font-bold">What are the benefit of online booking Doctor</h2>
                        <p>It's doctor the services is very easy way.First of all your create a appointment.
                        Then services the doctor </p>
                        
                        </div>
                        <div className="mt-8">
                        <Link to="/booking" className="p-3 rounded-lg bg-blue-800 text-white
                         font-bold">Booking Now</Link>
                        </div>
                        <div className="bg-blue-900 w-32 text-center py-2
                        absolute top-[50%] right-10 rounded-full">
                            <span className="text-[12px] text-white">22 september 2024</span>
                        </div>
                        
                    </div>

                    <div className=" bg-white p-6 shadow-lg relative">
                        <div className="flex justify-center items-center ">
                        <img 
                        src="https://i.ibb.co.com/d2YpG2S/pexels-simon-robben-55958-614810.jpg"
                         alt="" className="w-[400px] h-[300px] rounded-lg"/>
                        </div>
                        <div className="space-y-5 mt-3">
                        <span>Client</span>
                        <h2 className="text-[18px] font-bold">Benefits of Consulting With On Online Doctor</h2>
                        <p>It's doctor the services is very easy way.First of all your create a appointment.
                        Then services the doctor </p>
                        
                        </div>
                        <div className="mt-8">
                        <Link to="/booking" className="p-3 rounded-lg bg-blue-800 text-white
                         font-bold">Booking Now</Link>
                        </div>
                        <div className="bg-blue-900 w-32 text-center py-2
                        absolute top-[50%] right-10 rounded-full">
                            <span className="text-[12px] text-white">20 september 2024</span>
                        </div>
                        
                    </div>

                    <div className=" bg-white p-6 shadow-lg relative">
                        <div className="flex justify-center items-center ">
                        <img 
                        src="https://i.ibb.co.com/DfzY2zG/pexels-olly-3756681.jpg"
                         alt="" className="w-[400px] h-[300px] rounded-lg"/>
                        </div>
                        <div className="space-y-5 mt-3">
                        <span>Client</span>
                        <h2 className="text-[18px] font-bold">Doccure - Making Your client pointless visit ?</h2>
                        <p>It's doctor the services is very easy way.First of all your create a appointment.
                        Then services the doctor </p>
                        
                        </div>
                        <div className="mt-8">
                        <Link to="/booking" className="p-3 rounded-lg bg-blue-800 text-white
                         font-bold">Booking Now</Link>
                        </div>
                        <div className="bg-blue-900 w-32 text-center py-2
                        absolute top-[50%] right-10 rounded-full">
                            <span className="text-[12px] text-white">20 september 2024</span>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Blog;