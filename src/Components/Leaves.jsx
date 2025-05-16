import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeavesCard from "./LeavesCard";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Leaves.css';

const Leaves = () => {
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/Leaves');
    } else {
      console.log("User is not authenticated");
      navigate('/LoginPage');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-4 box-margin">
        <h1 className="mb-3">Leave Portal</h1>
        <p className="text-muted fs-5">Apply Leave with this Portal</p>
        <LeavesCard />
      </div>
    </div>
  );
};

export default Leaves;
