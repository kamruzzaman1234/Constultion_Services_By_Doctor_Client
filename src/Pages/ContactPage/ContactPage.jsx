import React from "react";
import { FaMapMarkerAlt, FaClock, FaQuestionCircle } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Our Medical Team</h2>
          <p className="text-gray-600 mt-2">Reach out with any questions or for appointment details</p>
        </div>

        {/* FAQ, Location, and Hours Section */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3 text-center">
          
          {/* FAQ */}
          <div className="space-y-4 bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaQuestionCircle className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">FAQ</h3>
            <ul className="text-gray-600 list-disc list-inside mt-4 text-left">
              <li>How can I book an appointment?</li>
              <li>What are the consultation hours?</li>
              <li>Is there an initial consultation fee?</li>
              <li>Are online consultations available?</li>
              <li>Do you accept insurance?</li>
            </ul>
          </div>

          {/* Our Location */}
          <div className="space-y-4 bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-red-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Location</h3>
            <iframe
              className="w-full h-64 rounded-lg shadow-lg border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9062598811343!2d90.387537!3d23.750993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894a226d3f7%3A0x3676248722f5a4e!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1605318765220!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <p className="text-gray-600 mt-4">123 Medical Ave, Dhaka</p>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4 bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaClock className="text-green-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Operating Hours</h3>
            <p className="text-gray-600 mt-4">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Closed on Sundays</p>
          </div>
        </div>

        {/* Extra Info Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Commitment to Quality Care</h3>
          <p className="text-lg">
            We’re here to provide compassionate and thorough healthcare services.
            For appointment booking and inquiries, reach out to us directly through our contact form or at our physical location.
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-lg p-8 mt-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-600 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-600 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
