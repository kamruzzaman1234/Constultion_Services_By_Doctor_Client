import { useEffect } from "react";
import { useState } from "react";
import DoctorInfo from "./DoctorInfo";


const DoctorPage = ()=>{
    const [doctorsData, setDoctorsData] = useState([])
    const [visible, setVisible] = useState(24)

    useEffect(()=>{
        fetch("https://consultation-services-by-doctors.vercel.app/doctorInfo")
            .then(res => res.json())
            .then(data => {
                console.log("Doctors data:", data); 
                if (Array.isArray(data)) {
                    setDoctorsData(data); 
                } else {
                    console.error("Received data is not an array:", data);
                }
            })
            .catch(error => console.error("Error fetching doctors:", error));
    },[])
    return(
        <div className="py-20 bg-blue-100">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
                <h2 className="text-[20px] mb-6">
                 <span className="font-bold">{doctorsData.length}</span> Doctors find in General Physician Department</h2>

                <div className="grid grid-cols-1 gap-6">
                    

             {Array.isArray(doctorsData) && doctorsData.map(doctor => (
                <DoctorInfo key={doctor._id} doctor={doctor} />
            ))}
                </div>
            </div>
        </div>
    )
}
export default DoctorPage;