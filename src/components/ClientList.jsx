// src/components/ClientList.jsx
import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTools } from "react-icons/fa";

const ClientList = ({ clients, selectedService, setSelectedService, serviceTypes }) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Clients</h2>
      {/* Service Filter Dropdown */}
      <div className="mb-6">
        <label htmlFor="serviceFilter" className="block text-sm font-medium text-gray-700">
          Filter by Service
        </label>
        <select
          id="serviceFilter"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="all">All Services</option>
          {serviceTypes.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {clients.map((client) => (
          <div
            key={client._id}
            className="border p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white transform hover:scale-105 ease-in-out"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
              <FaUser className="mr-3 text-blue-500" /> {client.name}
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 flex items-center">
                <FaEnvelope className="mr-3 text-blue-500" /> {client.email}
              </p>
              <p className="text-gray-700 flex items-center">
                <FaPhone className="mr-3 text-blue-500" /> {client.contactNumber}
              </p>
              <p className="text-gray-700 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-blue-500" /> {client.address}
              </p>
              <p className="text-gray-700 flex items-center">
                <FaCalendarAlt className="mr-3 text-blue-500" /> {client.date}
              </p>
              <p className="text-gray-700 flex items-center">
                <FaClock className="mr-3 text-blue-500" /> {client.time}
              </p>
              <p className="text-gray-700 flex items-center">
                <FaTools className="mr-3 text-blue-500" /> {client.serviceType}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientList;