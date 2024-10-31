import { ImHappy } from "react-icons/im";
import { RiProjectorLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
const OverView = ()=>{
    return(
        <div className="py-10 bg-blue-900">
            <div className="max-w-7xl mx-6 lg:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <div className="flex flex-col justify-center  items-center text-white">
                            <ImHappy className="text-[60px] font-bold"/>
                            <h2 className="font-bold text-[25px]">3500</h2>
                            <span className="font-semibold">Happy Customers</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center  items-center text-white">
                            <RiProjectorLine className="text-[60px] font-bold"/>
                            <h2 className="font-bold text-[25px]">460+</h2>
                            <span className="font-semibold">Project Done</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-center text-white">
                            <FaAward className="text-[60px] font-bold"/>
                            <h2 className="font-bold text-[25px]">40+</h2>
                            <span className="font-semibold">Awards</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center  items-center text-white">
                            <GrWorkshop className="text-[60px] font-bold"/>
                            <h2 className="font-bold text-[25px]">440+</h2>
                            <span className="font-semibold">Client Works</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OverView;