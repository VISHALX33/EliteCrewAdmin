// src/components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import WorkerList from "./WorkerList";
import ClientList from "./ClientList";

const AdminDashboard = () => {
  const [workers, setWorkers] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("workers");
  const [selectedProfession, setSelectedProfession] = useState("all");
  const [selectedService, setSelectedService] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [workersRes, clientsRes] = await Promise.all([
          axios.get("https://elitecrewworker.onrender.com/api/workers"),
          axios.get("https://elitecrewclient.onrender.com/api/clients"),
        ]);
        setWorkers(workersRes.data);
        setClients(clientsRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Get unique professions from workers
  const professions = [...new Set(workers.map((worker) => worker.profession))];

  // Get unique service types from clients
  const serviceTypes = [...new Set(clients.map((client) => client.serviceType))];

  // Filter workers based on selected profession
  const filteredWorkers =
    selectedProfession === "all"
      ? workers
      : workers.filter((worker) => worker.profession === selectedProfession);

  // Filter clients based on selected service
  const filteredClients =
    selectedService === "all"
      ? clients
      : clients.filter((client) => client.serviceType === selectedService);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="p-8">
        {activeTab === "workers" && (
          <WorkerList
            workers={filteredWorkers}
            selectedProfession={selectedProfession}
            setSelectedProfession={setSelectedProfession}
            professions={professions}
          />
        )}
        {activeTab === "clients" && (
          <ClientList
            clients={filteredClients}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            serviceTypes={serviceTypes}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;