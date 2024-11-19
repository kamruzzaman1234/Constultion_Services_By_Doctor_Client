import { useState, useEffect } from "react";
import DoctorList from "./DoctorList";

const DoctorArea = () => {
    const [doctors, setDoctors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 4; 
    const url = "http://localhost:6007/doctorInfo";

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

    return (
        <div className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
                <div className="mb-12">
                    <h2 className="text-[26px] font-bold text-center">Our Doctors</h2>
                    <p className="text-center">
                        Visit our doctor and treatment in this doctor. Doctors are very professional and many experienced.
                    </p>
                </div>
                {/* Service Area */}
     
               
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {getPaginatedData().map(docList => (
                        <DoctorList key={docList._id} docList={docList} />
                    ))}
                </div>

                {/* Pagination Buttons */}
                <div className="pagination flex justify-center mt-8 space-x-2">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded ${currentPage === index + 1 ? 
                                "bg-blue-500 text-white" : "bg-gray-300"}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorArea;
