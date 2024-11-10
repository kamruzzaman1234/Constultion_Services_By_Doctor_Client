import { useEffect, useState } from "react";
import DoctorInfo from "./DoctorInfo";
import { Link } from "react-router-dom";
const DoctorPage = () => {
    const [doctorsData, setDoctorsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://consultation-services-by-doctors.vercel.app/doctorInfo")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setDoctorsData(data);
                } else {
                    console.error("Received data is not an array:", data);
                }
            })
            .catch((error) => console.error("Error fetching doctors:", error));
    }, []);

    // Filter doctors based on location or title
    const filteredDoctors = doctorsData.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="py-20 bg-blue-100">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    <span className="font-bold">{filteredDoctors.length}</span> Doctors Found in General Physician Department
                </h2>


                <div className="flex flex-col items-center justify-center my-4 py-6 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        Want to Add a New Service?
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        If you are a doctor, you can add your services here to start offering consultations.
      </p>
      <Link to="/addService"
        onClick={() => alert('Redirecting to add service form...')} // Replace with actual redirect or action
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Service
      </Link>
    </div>

                {/* Search Input */}
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search by name, location, or title"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Doctor Grid */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                    {filteredDoctors.map((doctor) => (
                        <DoctorInfo key={doctor._id} doctor={doctor} />
                    ))}
                </div>

                {/* No Results Message */}
                {filteredDoctors.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">No doctors match your search criteria.</p>
                )}
            </div>
        </div>
    );
};

export default DoctorPage;
