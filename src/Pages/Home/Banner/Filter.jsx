// FilterArea.js
import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between
       rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-4">
      {/* Location Selector */}
      <div className="w-full md:w-1/3">
        <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
          Select Your Location
        </label>
        <select
          id="location"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Choose location</option>
          <option value="dhaka">Dhaka</option>
          <option value="chittagong">Chittagong</option>
          <option value="khulna">Khulna</option>
        </select>
      </div>

      {/* Doctor Search Input */}
      <div className="w-full md:w-1/3">
        <label htmlFor="doctor" className="block text-gray-700 font-semibold mb-2">
          Search Your Doctor
        </label>
        <input
          type="text"
          id="doctor"
          placeholder="Enter doctor's name"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Search Button */}
      <div className="w-full md:w-1/4">
        <button className="w-full bg-blue-600 text-white font-semibold
         py-2 px-4 mt-7 rounded-md shadow-lg hover:bg-blue-700
         focus:ring-2 focus:ring-blue-500 focus:outline-none">
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
