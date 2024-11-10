import { useLoaderData } from "react-router-dom"
import AuthProvider, { AuthContext } from "../../../Provider/AuthProvider"
import { useContext } from "react";
import { Link } from "react-router-dom";

const DoctorBooking = ()=>{
    const allDoctorData = useLoaderData()
    const {image, name, title, _id, description, medical_name,
        price, rating, location, join_time,  online_service_time,
         experience, offline_service_time} = allDoctorData

         const {user} = useContext(AuthContext)
        
         const handleSubmit = (e)=>{
                e.preventDefault()
        
                const form = e.target 
                const name = form.name.value 
                const email = form.email.value 
                const startDate = form.startDate.value 
                const endDate = form.endDate.value 
                const offline_time = form.offline_time.value 
                const online_time = form.online_time.value 
                const price = form.price.value 
                const phone_number = form.phone_number.value 

                const allInfo = {
                    image, 
                    Name:
                    name,    
                    Email : email,
                    startDate : startDate ,
                    endDate : endDate,
                    offline_time: offline_time,
                    online_time : online_time ,
                    price : price, 
                    Phone_Number : phone_number,
                    title,location
                }
                
                fetch(`https://consultation-services-by-doctors.vercel.app/doctorBooking`, {
                   method:"POST",
                   headers: {
                    'content-type':'application/json'
                   },
                   body: JSON.stringify(allInfo),
                      
                })
                .then(res=> res.json())
                .then(data=>{
                    if(data.insertedId){
                        alert('Booking Successfully')
                        form.reset()
                    }
                  
                })
         }
    return(
        <div className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
                <div>
                    <h2 className="bg-slate-200 text-blue-700 
                     text-center py-3 text-[22px] 
                     rounded-lg font-bold">Doctor Booking Now</h2>
                    <Link to="/consultationList" className=" text-[17px] font-bold text-red-800
                     bg-white px-3 py-2 rounded-lg">Check Your Consultation List</Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
                    <div className="bg-white h-[550px] shadow-lg rounded-lg px-8 ">
                       <div className="">
                       <h2 className="text-black text-3xl font-bold text-center">Service Time</h2>
                        <div className=" px-4 my-2 gap-3">
                            <div className="bg-blue-900 px-1 lg:px-8 py-3 rounded-lg shadow-lg">
                            <h2 className="text-[] font-bold text-white
                             ">Online Service Time
                             <span className="bg-green-500 rounded-lg text-white">
                            {online_service_time}</span> </h2>
                            <h2 className="text-[] font-bold text-white
                             ">Offline Service Time
                             <span className="bg-green-500 rounded-lg text-white">
                            {offline_service_time}</span> </h2>
                            </div>
                        </div>
                       </div>
                       <div className="my-6 flex flex-col lg:flex-row gap-5 ">
                            <img src={image} alt="" className="w-[300px] h-[300px] rounded-lg"/>
                            <div>
                                <h2 className="font-bold">{name}</h2>
                                <h2 className="font-bold">{location}</h2>
                                <h2>Works At <span className="font-bold">{medical_name}</span> </h2>
                            </div>
                       </div>
                    </div>
                    <div className="my-6 lg:my-0 shadow-lg bg-white py-6 px-6">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="  gap-4 px-0 lg:px-2">
                                    <div className="form-control mb-3">
                                        <label htmlFor="" className="text-blue-800 font-bold">Name</label>
                                        <input type="text" name="name" className="input input-bordered"
                                         defaultValue={user?.displayName}/>
                                    </div>
                                    <div className="form-control mb-3">
                                        <label htmlFor="" className="text-blue-800 font-bold">Email</label>
                                        <input type="text" name="email" className="input input-bordered"
                                         defaultValue={user?.email}/>
                                    </div>
                                    <div className="form-control mb-3">
                                        <label htmlFor="" className="text-blue-800 font-bold">Start Date</label>
                                        <input type="date" name="startDate" className="input input-bordered"
                                         />
                                    </div>
                                    <div className="form-control mb-3">
                                        <label htmlFor="" className="text-blue-800 font-bold">End Date</label>
                                        <input type="date" name="endDate" className="input input-bordered"
                                         />
                                    </div>
                                    <div className="form-control mb-3">
                                        <label htmlFor="" className="text-blue-800 font-bold">Online Service</label>
                                        <input type="text" name="online_time" placeholder="Time 8.00am - 11.00pm"
                                        className="input input-bordered"
                                         />
                                    </div>
                                    <div className="form-control mb-3">
                                        <label htmlFor="" className="text-blue-800 font-bold">Offline  Service</label>
                                        <input type="text" name="offline_time" placeholder="Time 11.00am - 4.00pm"
                                        className="input input-bordered"
                                         />
                                    </div>
                                    <div className="form-control mb-3">
                                        <label htmlFor="" className="text-blue-800 font-bold">Consultation Fee</label>
                                        <input type="text" defaultValue={price} name="price" placeholder=""
                                        className="input input-bordered"
                                         />
                                    </div>
                                    <div className="form-control mb-3">
                                        <label htmlFor="" className="text-blue-800 font-bold">Phone Number</label>
                                        <input type="text"  name="phone_number" placeholder="Enter Your Phone Number"
                                        className="input input-bordered"
                                         />
                                    </div>
                                    <div className="col-span-2">
                                        <input type="submit" value="Booking Now" className="btn w-full text-white 
                                        font-bold bg-green-500"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default DoctorBooking;