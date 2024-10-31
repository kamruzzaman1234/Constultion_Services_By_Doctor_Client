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
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        {/* Table Head */}
        <thead>
          <tr className="bg-blue-500 text-white text-sm uppercase tracking-wide font-semibold">
            <th className="p-3 text-center">
              <input type="checkbox" className="checkbox" />
            </th>
            <th>Image</th>
            
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-right">Price</th>
            <th className="p-3 text-center">Start Date</th>
            <th className="p-3 text-center">End Date</th>
            <th className="p-3 text-center">Online Time</th>
            <th className="p-3 text-center">Offline Time</th>
            <th className="p-3 text-center">Accept</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {consultationList.map((list) => (
            <tr key={list._id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
              <td className="p-3 text-center">
                <input type="checkbox" className="checkbox" />
              </td>
              <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={list.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{list.title}</div>
              <div className="text-sm opacity-50">{list.location}</div>
            </div>
          </div>
        </td>
              
              <td className="p-3 text-left text-gray-600">{list.Email}</td>
              <td className="p-3 text-right text-gray-800 font-semibold">${list.price}</td>
              <td className="p-3 text-center text-gray-600 font-bold">{list.startDate}</td>
              <td className="p-3 text-center text-gray-600 font-bold">{list.endDate}</td>
              <td className="p-3 text-center text-gray-600 font-bold">{list.online_time}</td>
              <td className="p-3 text-center text-gray-600 font-bold">{list.offline_time}</td>
              <td className="p-3  text-center">
                <button className="px-4 mx-1 py-1 text-sm text-white bg-gray-500 rounded-lg hover:bg-green-600">
                  confirm
                </button>
                <button onClick={()=>handleDelete(list._id)} 
                className="px-4 py-1 mx-1 text-sm text-white bg-red-500 rounded-lg hover:bg-green-600">
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