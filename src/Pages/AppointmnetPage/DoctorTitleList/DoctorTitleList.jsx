import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DoctorTitleList() {
  const [doctors, setDoctors] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState(null);
  

  useEffect(() => {
    // Fetch doctors data from the API
    axios.get('http://localhost:6007/doctorInfo')
      .then((response) => {
        setDoctors(response.data);
        
        // Extract unique titles
        const uniqueTitles = [...new Set(response.data.map((doc) => doc.title))];
        setTitles(uniqueTitles);
      })
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  return (
    <div className="py-10 bg-blue-500 bg-opacity-10 z-10">
      <div className="max-w-7xl mx-8 md:mx-12 lg:mx-auto ">
      <div className="border-y-2 border-blue-300 my-8 w-[30%] mb-10 text-center mx-auto ">
        <h2 className="text-2xl font-semibold">Choose Your Doctor</h2>
        <p>Choose Your Best Doctor and Easyly Services</p>
        </div>
        <div className="flex gap-6 ">
        <div className="flex flex-col gap-3">
        {/* Render buttons for each title */}
        {titles.map((title) => (
          <button
            key={title}
            onClick={() => setSelectedTitle(title)}
            className={`  text-[14px] rounded-md ${
              selectedTitle === title ? 'bg-blue-600 text-white' : 'bg-blue-200 text-gray-800'
            } hover:bg-blue-500 transition`}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Display doctors based on selected title */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {doctors
          .filter((doc) => selectedTitle === null || doc.title === selectedTitle)
          .map((doctor) => (
            <div key={doctor.id} className="border px-3 py-2   rounded-md text-shadow">
                <img src={doctor.image} alt=""  className="w-[200px] h-250px]"/>
              <h2 className="text-lg font-semibold">{doctor.name}</h2>
              <p className="text-sm text-gray-600">{doctor.title}</p>
              <p className="mt-2 text-gray-700">{doctor.description}</p>
              <div className="my-6">
              <Link to={`/viewDoctor/${doctor._id}`} 
              className="px-3 py-2 text-white font-bold bg-blue-600
               rounded-lg text-[14px]">View Details</Link>
              </div>
            </div>
          ))}
      </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorTitleList;
