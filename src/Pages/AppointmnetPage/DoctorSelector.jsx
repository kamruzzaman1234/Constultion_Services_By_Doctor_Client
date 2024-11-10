import React, { useEffect, useState } from 'react';
import DoctorList from './DoctorList'; // DoctorList কম্পোনেন্টকে ব্যবহার করা হচ্ছে

const DoctorSelector = () => {
    const [doctors, setDoctors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 4; 
    const url = "https://consultation-services-by-doctors.vercel.app/doctorInfo";

  

  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) {
                setDoctors(data);
                setTotalPages(Math.ceil(data.length / itemsPerPage)); 
            } else {
                console.error("Received data is not an array:", data);
            }
        })
        .catch(error => console.error("Error fetching doctors:", error));
}, []);


const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return doctors.slice(startIndex, endIndex);
};

const handlePageChange = (page) => {
    setCurrentPage(page);
};
 

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-8 md:mx-12 lg:mx-auto">
        <div className="border-y-2 border-blue-50 my-8 w-[30%] text-center mx-auto ">
        <h2 className="text-2xl font-semibold">Choose Your Doctor</h2>
        <p>Choose Your Best Doctor and Easyly Services</p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {getPaginatedData().map(doctor => (
                        <DoctorList key={doctor._id} doctor={doctor} />
                    ))}
                </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg font-semibold">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorSelector;
