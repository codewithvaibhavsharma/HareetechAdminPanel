import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FixedHolidays from "./FixedHolidays";
import OptionalHolidays from "./OptionalHolidays";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Holidays.css'

const Holidays = () => {
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/Holidays');
    } else {
      console.log("User is not authenticated");
      navigate('/LoginPage');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-4 box-margin">
        <h1 className="mb-3">Holidays of the Year</h1>
        <p className="text-muted fs-5">Mentioned all the Holidays for Employees</p>
        <h2 className="mt-4">2025 Leave Calendar</h2>
        <FixedHolidays />
        <div className="mt-4 ms-5">
          <OptionalHolidays />
        </div>
      </div>
    </div>
  );
};

export default Holidays;
