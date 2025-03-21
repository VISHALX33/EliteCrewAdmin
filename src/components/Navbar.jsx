// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("workers")}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === "workers"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              } transition-all duration-300`}
            >
              Workers
            </button>
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === "clients"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              } transition-all duration-300`}
            >
              Clients
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;