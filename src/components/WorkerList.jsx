// src/components/WorkerList.jsx
import React from "react";

const WorkerList = ({ workers, selectedProfession, setSelectedProfession, professions }) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Workers</h2>
      {/* Profession Filter Dropdown */}
      <div className="mb-6">
        <label htmlFor="professionFilter" className="block text-sm font-medium text-gray-700">
          Filter by Profession
        </label>
        <select
          id="professionFilter"
          value={selectedProfession}
          onChange={(e) => setSelectedProfession(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="all">All Professions</option>
          {professions.map((profession, index) => (
            <option key={index} value={profession}>
              {profession}
            </option>
          ))}
        </select>
      </div>

      {/* Workers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
        {workers.map((worker) => (
          <div
            key={worker._id}
            className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
          >
            <img
              src={`https://elitecrewworker.onrender.com/uploads/${worker.image}`}
              alt={worker.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{worker.name}</h2>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Email:</span> {worker.email}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Degree:</span> {worker.degree}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">10th Marks:</span> {worker.marks10}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">12th Marks:</span> {worker.marks12}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Aadhar:</span> {worker.aadhar}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Contact:</span> {worker.contact}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Address:</span> {worker.address}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Profession:</span> {worker.profession}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkerList;