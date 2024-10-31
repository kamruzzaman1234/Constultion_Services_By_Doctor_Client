import { GiStomach } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { GiBrain } from "react-icons/gi";
import { PiBrainThin } from "react-icons/pi";
const ClientAndSpecialites = ()=>{
    return(
        <div className="py-20">
            <div className="max-w-7xl mx-6 lg:mx-auto">
                <div className="mb-12">
                    <h2 className="text-[26px] font-bold text-center">Client And Specialites</h2>
                    <p className="text-center">Clients are individuals or businesses that use your They trust you for your expertise, <br /> reliability,
                     and value in delivering solutions that meet their needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div className="border p-4 rounded-lg flex justify-center r  items-center flex-col">
                    <div className="w-40 h-40 bg-white shadow-2xl flex  rounded-full">
                    <div className="flex justify-center items-center mx-6 lg:mx-auto">
                            <GiStomach className="text-blue-500 text-center
                            text-[70px]"/>
                        </div>
                    </div>
                   
                    
                    <div className="mt-8">
                        <h2 className="text-[18px] font-bold">Cardiologist</h2>
                    </div>
                    </div>
                    <div className="border p-4 rounded-lg flex justify-center r  items-center flex-col">
                    <div className="w-40 h-40 bg-white shadow-2xl flex  rounded-full">
                    <div className="flex justify-center items-center mx-6 lg:mx-auto">
                            <FaUserDoctor className="text-blue-500 text-center
                            text-[70px]"/>
                        </div>
                    </div> 
                    <div className="mt-8">
                        <h2 className="text-[18px] font-bold">Dentist</h2>
                    </div>
                    </div>
                    <div className="border p-4 rounded-lg flex justify-center r  items-center flex-col">
                    <div className="w-40 h-40 bg-white shadow-2xl flex  rounded-full">
                    <div className="flex justify-center items-center mx-6 lg:mx-auto">
                            <GrTest className="text-blue-500 text-center
                            text-[70px]"/>
                        </div>
                    </div>
                   
                    
                    <div className="mt-8">
                        <h2 className="text-[18px] font-bold">Laboratory</h2>
                    </div>
                    </div>
                    <div className="border p-4 rounded-lg flex justify-center r  items-center flex-col">
                    <div className="w-40 h-40 bg-white shadow-2xl flex  rounded-full">
                    <div className="flex justify-center items-center mx-6 lg:mx-auto">
                            <GiBrain className="text-blue-500 text-center
                            text-[70px]"/>
                        </div>
                    </div>
                   
                    
                    <div className="mt-8">
                        <h2 className="text-[18px] font-bold">Neurology</h2>
                    </div>
                    </div>
                    <div className="border p-4 rounded-lg flex justify-center r  items-center flex-col">
                    <div className="w-40 h-40 bg-white shadow-2xl flex  rounded-full">
                    <div className="flex justify-center items-center mx-6 lg:mx-auto">
                            <PiBrainThin className="text-blue-500 text-center
                            text-[70px]"/>
                        </div>
                    </div>
                   
                    
                    <div className="mt-8">
                        <h2 className="text-[18px] font-bold">Ophthalmology</h2>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientAndSpecialites;