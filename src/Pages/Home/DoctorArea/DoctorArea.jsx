import { useState, useEffect } from "react";
import DoctorList from "./DoctorList";

const DoctorArea = ()=>{
    const [doctors, setDoctors] = useState([])
    const [visible, setVisible] = useState(4)
    // const url = 'http://localhost:6007/doctorInfo'
    const url = "http://localhost:6007/doctorInfo"
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setDoctors(data)
            console.log("Doctor area is",data)
        })
    },[])
    return(
        <div className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-6 md:mx-10 lg:auto">
            <div className="mb-12">
                    <h2 className="text-[26px] font-bold text-center">Our Doctors</h2>
                    <p className="text-center">Visit our doctor and treatment in this doctor.Doctors are very professional and many experienced</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {
                        doctors.slice(0, visible).map(docList=> <DoctorList key={docList._id}
                         docList={docList}>

                        </DoctorList>)
                    }
                </div>
            </div>
        </div>
    )
}
export default DoctorArea;