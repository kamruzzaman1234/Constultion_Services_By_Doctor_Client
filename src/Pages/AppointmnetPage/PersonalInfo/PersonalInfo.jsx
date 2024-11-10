import React, { useState } from 'react';

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    specialRequest: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.contactNumber) formErrors.contactNumber = 'Contact number is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is not valid';
    }
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      console.log('Form Data Submitted: ', formData);
      // Simulate a delay for submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({
          name: '',
          contactNumber: '',
          email: '',
          specialRequest: ''
        });
        alert('Form submitted successfully!');
      }, 1000);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Personal Information</h2>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Contact Number Field */}
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="text"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Special Request Field */}
        <div className="mb-4">
          <label htmlFor="specialRequest" className="block text-sm font-medium text-gray-700">
            Special Request (Optional)
          </label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500'} rounded-md`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
