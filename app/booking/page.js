
'use client'

import { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
  });

  const services = [
    '3D Design',
    'Modular Kitchen',
    'Interior Designing',
    'False Ceiling',
    'Wooden Floors',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-6 border  shadow-md bg-white">
      <div>
        <label className="block text-lg font-bold text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block p-3 w-full border border-gray-500 text-black rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      
      <div>
        <label className="block text-lg font-bold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 p-3 block w-full border border-gray-500 text-black  rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      
      <div>
        <label className="block text-lg font-bold text-gray-700">Service Type</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="mt-1 p-3 block w-full border border-gray-500 text-black  rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="" disabled>Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-lg font-bold text-gray-700">Appointment Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="mt-1 p-3 block w-full border border-gray-500 text-black  rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Book Appointment
      </button>
    </form>
  );
}

export default BookingForm;
