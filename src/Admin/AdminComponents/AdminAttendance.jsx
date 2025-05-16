import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
// import '../Styles/AdminAttendance.css';


const AdminAttendance = () => {
  const isAuthenticated = localStorage.getItem('AdminAuth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/AdminAttendance'); 
    } else {
      console.log("User is not authenticated");
      navigate('/Login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container-fluid p-4 bg-light">
      <div className="row">
        <AdminSidebar />

        <div className="col-md-9 ms-sm-auto col-lg-10">
          <h1>Attendance Management</h1>
          <p className="mt-3">Digital Attendance module for Employees</p>   
          {/* // <EmpAttendanceData />        */}
        </div>
      </div>
    </div>
  );
};

export default AdminAttendance;
