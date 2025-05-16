import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import EmpLeavesData from "./EmpLeavesData";

const AdminLeaves = () => {
  const isAuthenticated = localStorage.getItem('AdminAuth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/AdminLeaves');
    } else {
      console.log("User is not authenticated");
      navigate('/Login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container-fluid px-4">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <h1 className="mt-auto">Leave Management</h1>
          <p>Employee's Leave Records as Updated</p>
          <EmpLeavesData />
        </div>
      </div>
    </div>
  );
};

export default AdminLeaves;
