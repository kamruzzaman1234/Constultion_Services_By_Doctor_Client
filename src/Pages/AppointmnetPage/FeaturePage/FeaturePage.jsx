import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const FeaturePage = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  // Fetch doctor data from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://consultation-services-by-doctors.vercel.app/doctorInfo');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  // Handle doctor selection
  const handleDoctorChange = (e) => {
    const doctorId = e.target.value;
    const doctor = doctors.find((doc) => doc._id === doctorId);
    setSelectedDoctor(doctor);
    setAvailableSlots([]);
    setSelectedSlot('');
  };

  // Handle date change and update time slots
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (selectedDoctor && selectedDoctor.availability) {
      const dateString = date.toISOString().split('T')[0];
      const doctorAvailability = selectedDoctor.availability[dateString] || [];
      setAvailableSlots(doctorAvailability);
      setSelectedSlot('');
    }
  };

  // Handle booking appointment
  const handleBookAppointment = async () => {
    setIsBooking(true);

    const appointmentData = {
      doctorId: selectedDoctor._id,
      patientName,
      date: selectedDate.toISOString().split('T')[0],
      time: selectedSlot,
    };

    try {
      const response = await fetch('http://localhost:5000/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment');
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="bg-blue-400 bg-opacity-20 z-10 py-10">
        <div className="max-w-7xl mx-auto p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Appointment Booking</h2>

      {/* Patient Name */}
      <div className="mb-4">
        <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
          Patient Name
        </label>
        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Doctor Selection */}
      <div className="mb-4">
        <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
          Select a Doctor
        </label>
        <select
          id="doctor"
          onChange={handleDoctorChange}
          className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor._id} value={doctor._id}>
              {doctor.name} - {doctor.specialty}
            </option>
          ))}
        </select>
      </div>

      {/* Date Picker */}
      {selectedDoctor && (
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Select Appointment Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Time Slots */}
      {availableSlots.length > 0 && (
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Select Time Slot
          </label>
          <select
            id="time"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a time</option>
            {availableSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-4 text-center">
        <button
          onClick={handleBookAppointment}
          disabled={!selectedSlot || !patientName}
          className={`px-6 py-2 text-white ${isBooking ? 'bg-gray-400' : 'bg-blue-500'} rounded-md cursor-pointer`}
        >
          {isBooking ? 'Booking...' : 'Book Appointment'}
        </button>
      </div>
    </div>
    </div>
  );
};

export default FeaturePage;
