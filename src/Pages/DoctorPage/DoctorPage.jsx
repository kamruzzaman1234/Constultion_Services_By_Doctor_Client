import { useEffect } from "react";
import { useState } from "react";
import DoctorInfo from "./DoctorInfo";


const DoctorPage = ()=>{
    const [doctorData, setDoctorData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:6007/doctorInfo')
        .then(res=> res.json())
        .then(data=>{
            setDoctorData(data)
            console.log(data)
        })
    },[])
    return(
        <div className="py-20 bg-blue-100">
            <div className="max-w-7xl mx-6 md:mx-10 lg:auto">
                <h2 className="text-[20px] text-center mb-6">
                 <span className="font-bold">{doctorData.length}</span> Doctors find in General Physician Department</h2>
                <div className="grid grid-cols-1 gap-6">
                    {
                        doctorData.map(doctor=> <DoctorInfo key={doctor._id}
                        doctor={doctor}>

                        </DoctorInfo>)
                    }
                </div>
            </div>
        </div>
    )
}
export default DoctorPage;