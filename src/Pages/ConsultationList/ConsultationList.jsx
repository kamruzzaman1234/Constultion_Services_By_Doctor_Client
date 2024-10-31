import { Link, useLoaderData } from "react-router-dom";
import { FaStreetView } from "react-icons/fa";
import ConsultationListCard from "./ConsultationListCard";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";

const ConsultationList = ()=>{
    const [consultationList, setConsultationList] = useState([])
    const {user} = useContext(AuthContext)
    const url = `http://localhost:6007/doctorBooking`

    const handleDelete = (id)=>{
      const processed = confirm("Are You Sure you want to Delete")
     if(processed){
      fetch(`http://localhost:6007/doctorBooking/${id}`, {
          method:"DELETE",
        
      })
      .then(res=> res.json())
      .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
              alert("Deleted SuccessFull")
              const reamining = consultationList.filter(booking=> booking._id !== id)
              setConsultationList(reamining)
          }
          
      })
     }
  }
   
   const handleConfirm = (id)=>{
      fetch(`http://localhost:6007/doctorBooking/${id}`,{
        method:"PATCH",
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify({status: "confirm"})
      })
      .then(res=> res.json())
      .then(data=> {
        console.log(data)
        if(data.modifiedCount > 0){
          const remining = consultationList.filter(booking=> booking._id !== id)
          const updated = consultationList.find(booking=> booking._id === id)
          updated.status = "confirm"
          const newBooking = [updated, ...remining]
          console.log(newBooking)
          setConsultationList(newBooking)
        }
      })
    }

   


    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            setConsultationList(data)
            console.log(data)
        })
    },[url])
    
    return(
      <div className="overflow-x-auto">
  <table className="min-w-full bg-[#FF5A] border border-gray-200 rounded-lg shadow-md">
    {/* Table Head */}
    <thead>
      <tr className="bg-blue-500 text-white text-xs md:text-sm uppercase tracking-wide font-semibold">
        <th className="p-2 md:p-3 text-center">
          <input type="checkbox" className="checkbox" />
        </th>
        <th className="p-2 md:p-3 text-left">Image</th>
        <th className="p-2 md:p-3 text-left">Email</th>
        <th className="p-2 md:p-3 text-right">Price</th>
        <th className="p-2 md:p-3 text-center">Start Date</th>
        <th className="p-2 md:p-3 text-center">End Date</th>
        <th className="p-2 md:p-3 text-center">Online Time</th>
        <th className="p-2 md:p-3 text-center">Offline Time</th>
        <th className="p-2 md:p-3 text-center">Accept</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      {consultationList.map((list) => (
        <tr key={list._id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
          <td className="p-2 md:p-3 text-center">
            <input type="checkbox" className="checkbox" />
          </td>
          <td className="p-2 md:p-3 text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-10 w-10 sm:h-12 sm:w-12">
                  <img src={list.image} alt="Avatar" />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-sm sm:text-base">{list.title}</div>
                <div className="text-xs sm:text-sm opacity-50">{list.location}</div>
              </div>
            </div>
          </td>
          <td className="p-2 md:p-3 text-left text-gray-600 text-xs sm:text-sm">{list.Email}</td>
          <td className="p-2 md:p-3 text-right text-gray-800 font-semibold text-xs sm:text-sm">${list.price}</td>
          <td className="p-2 md:p-3 text-center text-gray-600 font-bold text-xs sm:text-sm">{list.startDate}</td>
          <td className="p-2 md:p-3 text-center text-gray-600 font-bold text-xs sm:text-sm">{list.endDate}</td>
          <td className="p-2 md:p-3 text-center text-gray-600 font-bold text-xs sm:text-sm">{list.online_time}</td>
          <td className="p-2 md:p-3 text-center text-gray-600 font-bold text-xs sm:text-sm">{list.offline_time}</td>
          <td className="p-2 md:p-3 text-center flex flex-col sm:flex-row gap-2 items-center justify-center">
            {list.status === "confirm" ? (
              <button className="px-2 py-1 sm:px-4 sm:py-1 text-xs sm:text-sm bg-yellow-500 text-white font-bold rounded-lg">
                Confirm
              </button>
            ) : (
              <button
                onClick={() => handleConfirm(list._id)}
                className="px-2 py-1 sm:px-4 sm:py-1 text-xs sm:text-sm bg-gray-500 text-white rounded-lg"
              >
                Please Confirm
              </button>
            )}
            <button
              onClick={() => handleDelete(list._id)}
              className="px-2 py-1 sm:px-4 sm:py-1 text-xs sm:text-sm text-white bg-red-500 rounded-lg hover:bg-green-600"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    )
}
export default ConsultationList;