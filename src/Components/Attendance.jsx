import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import EmployeeTimeTracking from "./EmployeeTimeTracking";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Attendance.css';

const Attendance = () => {
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();
  
  // Sidebar state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("User is not authenticated");
      navigate('/LoginPage');
    }
  }, [isAuthenticated, navigate]);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed); 
  };

  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar - stays fixed on desktop, stacked on mobile */}
      <div className={`flex-shrink-0 ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <Sidebar />
      </div>

      {/* Main content area */}
      <main className={`flex-grow-1 p-4 ${isSidebarCollapsed ? 'shifted' : ''}`}>
        <div className="container">
          <h1 className="fw-bold heading-text ">Attendance Portal</h1>
          <p className="text-muted text-center ">
            Digital Attendance module for Employees
          </p>
          <div className="mt-4">
            <EmployeeTimeTracking />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Attendance;
