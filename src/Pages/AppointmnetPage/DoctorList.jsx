import React from 'react';
import { Link } from 'react-router-dom';

const DoctorList = ({ doctor }) => {
    const {image, title, location, name} = doctor
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt="name"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-2">{title}</p>
      <p className="text-gray-500 mb-4">{location}</p>
      <Link to="/doctor" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition">
        Book Appointment
      </Link>
    </div>
  );
};

export default DoctorList;
