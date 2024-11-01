import { FaHouseMedicalFlag } from "react-icons/fa6";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { TbMedicineSyrup } from "react-icons/tb";
import { FaPumpMedical } from "react-icons/fa6";
import { GrDocumentTest } from "react-icons/gr";
import { FaBedPulse } from "react-icons/fa6";
const ExtraFeature = ()=>{
    return(
        <div className="py-20">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
            <div className="mb-12">
                    <h2 className="text-[26px] font-bold text-center">Available Feature In Our Clinic</h2>
                    <p className="text-center">Clients are individuals or businesses that use your They trust you for your expertise, <br /> reliability,
                     and value in delivering solutions that meet their needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                 <div className="py-[60px] rounded-lg bg-blue-900" 
                    style={{backgroundImage:"url('')", backgroundSize:"cover",
                     backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
                        <div className="flex gap-6 justify-center items-center">
                            <FaHouseMedicalFlag className="text-[40px] text-white"/>
                            <h3 className="text-[40px] text-white font-bold">Medical</h3>
                        </div>
                </div>
                <div className="py-[60px] rounded-lg bg-blue-900" 
                    style={{backgroundImage:"url(' ')", backgroundSize:"cover",
                     backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
                        <div className="flex gap-6 justify-center items-center">
                            <LiaFileMedicalAltSolid className="text-[40px] text-white"/>
                            <h3 className="text-[40px] text-white font-bold">Operation</h3>
                        </div>
                </div>
                <div className="py-[60px] rounded-lg bg-blue-900" 
                    style={{backgroundImage:"url(' ')", backgroundSize:"cover",
                     backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
                        <div className="flex gap-6 justify-center items-center">
                            <TbMedicineSyrup className="text-[40px] text-white"/>
                            <h3 className="text-[40px] text-white font-bold">Laboratory</h3>
                        </div>
                </div>
                <div className="py-[60px] rounded-lg bg-blue-900" 
                    style={{backgroundImage:"url(' ')", backgroundSize:"cover",
                     backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
                        <div className="flex gap-6 justify-center items-center">
                            <FaPumpMedical className="text-[40px] text-white"/>
                            <h3 className="text-[40px] text-white font-bold">ICU</h3>
                        </div>
                </div>
                <div className="py-[60px] rounded-lg bg-blue-900" 
                    style={{backgroundImage:"url(' ')", backgroundSize:"cover",
                     backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
                        <div className="flex gap-6 justify-center items-center">
                            <GrDocumentTest className="text-[40px] text-white"/>
                            <h3 className="text-[40px] text-white font-bold">Test Room</h3>
                        </div>
                </div>
                <div className="py-[60px] rounded-lg bg-blue-900" 
                    style={{backgroundImage:"url(' ')", backgroundSize:"cover",
                     backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
                        <div className="flex gap-6 justify-center items-center">
                            <FaBedPulse className="text-[40px] text-white"/>
                            <h3 className="text-[40px] text-white font-bold">Patient Room</h3>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default ExtraFeature;