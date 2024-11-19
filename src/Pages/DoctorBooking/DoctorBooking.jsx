import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const DoctorBooking = () => {
  const allDoctorData = useLoaderData();
  const { image, name, title, _id, description, medical_name, price, rating, location, join_time, online_service_time, experience, offline_service_time } = allDoctorData;
  const { user } = useContext(AuthContext);
  const [isBooking, setIsBooking] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooking(true);
    setSuccessMessage("");
    setErrorMessage("");
  
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    const offline_time = form.offline_time.value;
    const online_time = form.online_time.value;
    const price = form.price.value;
    const phone_number = form.phone_number.value;
  
    const allInfo = {
      image,
      name,
      email,
      startDate,
      endDate,
      offline_time,
      online_time,
      price,
      phone_number,
      title,
      location,
      doctorId: _id, // Adding doctorId for conflict check
    };
  
    fetch("http://localhost:6007/doctorBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allInfo),
    })
      .then((res) => {
        console.log("Response Status: ", res.status);  // Check response status
        if (res.status === 409) {
          throw new Error("The selected time slot is already booked.");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data from server: ", data);  // Log server response
        if (data && data.insertedId) {
          setSuccessMessage("Booking Successful!");
          form.reset();
          alert("Booking Successful!");
        } else {
          setErrorMessage("Booking Failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);  // Ensure error message is logged properly
        setErrorMessage(err.message || "An error occurred while booking. Please try again later.");
      })
      .finally(() => {
        setIsBooking(false);
      });
    
  };

  
  
  

  return (
    <div className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
        <div>
          <h2 className="bg-slate-200 text-blue-700 text-center py-3 text-[22px] rounded-lg font-bold">
            Doctor Booking Now
          </h2>
          <div className="flex justify-center my-7">
            <Link to="/consultationList" className="text-[17px] font-bold text-red-800 bg-white px-3 py-2 rounded-lg shadow-md hover:bg-red-200 transition">
              Check Your Consultation List
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
          <div className="bg-white h-[550px] shadow-xl rounded-lg px-8 py-4">
            <h2 className="text-black text-3xl font-bold text-center">Service Time</h2>
            <div className="px-4 my-2 gap-3">
              <div className="bg-blue-900 px-4 py-3 rounded-lg shadow-lg">
                <h2 className="font-bold text-white">Online Service Time:
                  <span className="bg-green-500 rounded-lg text-white ml-2">{online_service_time}</span>
                </h2>
                <h2 className="font-bold text-white">Offline Service Time:
                  <span className="bg-green-500 rounded-lg text-white ml-2">{offline_service_time}</span>
                </h2>
              </div>
            </div>
            <div className="my-6 flex flex-col lg:flex-row gap-5">
              <img src={image} alt="Doctor" className="w-[300px] h-[300px] rounded-lg shadow-xl" />
              <div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <h2 className="text-xl font-semibold">{location}</h2>
                <h2>Works at <span className="font-bold">{medical_name}</span></h2>
                <p className="text-sm mt-2">{description}</p>
              </div>
            </div>
          </div>

          <div className="shadow-xl bg-white py-6 px-6 rounded-lg">
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-center mb-4">Book Your Appointment</h3>
              <div className="space-y-4">
                <div className="form-control mb-3">
                  <label className="text-blue-800 font-bold">Name</label>
                  <input type="text" name="name" className="input input-bordered w-full" defaultValue={user?.displayName} />
                </div>
                <div className="form-control mb-3">
                  <label className="text-blue-800 font-bold">Email</label>
                  <input type="email" name="email" className="input input-bordered w-full" defaultValue={user?.email} />
                </div>
                <div className="form-control mb-3">
                  <label className="text-blue-800 font-bold">Start Date</label>
                  <input type="date" name="startDate" className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-3">
                  <label className="text-blue-800 font-bold">End Date</label>
                  <input type="date" name="endDate" className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-3">
                  <label className="text-blue-800 font-bold">Online Service</label>
                  <input type="text" name="online_time" placeholder="Time 8:00 AM - 11:00 PM" className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-3">
                  <label className="text-blue-800 font-bold">Offline Service</label>
                  <input type="text" name="offline_time" placeholder="Time 11:00 AM - 4:00 PM" className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-3">
                  <label className="text-blue-800 font-bold">Consultation Fee</label>
                  <input type="text" name="price" defaultValue={price} className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-3">
                  <label className="text-blue-800 font-bold">Phone Number</label>
                  <input type="text" name="phone_number" placeholder="Enter Your Phone Number" className="input input-bordered w-full" />
                </div>
                <div className="form-control mt-4">
                  <input type="submit" value={isBooking ? "Booking..." : "Book Now"} className={`btn w-full ${isBooking ? 'bg-gray-500' : 'bg-green-500'} text-white font-bold`} disabled={isBooking} />
                </div>
              </div>
            </form>

            {/* Success or Error Message */}
            {successMessage && (
              <div className="mt-4 text-center text-green-600 font-bold">
                <p>{successMessage}</p>
              </div>
            )}
            {errorMessage && (
              <div className="mt-4 text-center text-red-600 font-bold">
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBooking;
