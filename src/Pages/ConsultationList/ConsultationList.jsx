import { Link, useLoaderData } from "react-router-dom";
import { FaStreetView } from "react-icons/fa";
import ConsultationListCard from "./ConsultationListCard";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";

const ConsultationList = () => {
  const [consultationList, setConsultationList] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://consultation-services-by-doctors.vercel.app/doctorBooking`;

  const handleDelete = (id) => {
    const processed = confirm("Are You Sure you want to Delete");
    if (processed) {
      fetch(`https://consultation-services-by-doctors.vercel.app/doctorBooking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = consultationList.filter((booking) => booking._id !== id);
            setConsultationList(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`https://consultation-services-by-doctors.vercel.app/doctorBooking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = consultationList.filter((booking) => booking._id !== id);
          const updated = consultationList.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setConsultationList(newBooking);
        }
      });
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setConsultationList(data);
        } else {
          console.error("Data is not an array", data);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [url]);

  return (
    <div className="py-20">
      <table className="max-w-7xl mx-6 lg:mx-auto bg-[#FF5A] border border-gray-200 rounded-lg shadow-md">
        {/* Table Head */}
        <thead>
          <tr className="bg-blue-500 w-full text-white text-xs md:text-sm uppercase tracking-wide font-semibold">
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
          {consultationList.length > 0 ? (
            consultationList.map((list) => (
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
            ))
          ) : (
            <tr>
              <td colSpan="9" className="p-4 text-center">No consultations found</td> <br />
              <td className="text-black font-bold">Please Visited the Doctor<Link to="/doctor" className="text-center px-3 py-2 bg-blue-500 rounded-lg text-white">Visited Now</Link></td>
            </tr>
           
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultationList;
