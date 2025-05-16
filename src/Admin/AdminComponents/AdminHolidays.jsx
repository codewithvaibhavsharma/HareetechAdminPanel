import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import FixedHolidays from "../../Components/FixedHolidays";
import OptionalHolidays from "../../Components/OptionalHolidays";
import '../Styles/AdminHolidays.css'

const AdminHolidays = () => {
  const isAuthenticated = localStorage.getItem('AdminAuth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/AdminHolidays'); 
    } else {
      console.log("User is not authenticated");
      navigate('/Login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container-fluid px-4 zindex">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <h1 className="mt-4">Holidays of the Year</h1>
          <p className="styles">Mentioned all the Holidays for Employees</p>
          <h2 className="subTitle">2025 Leave Calendar</h2>

          <div className="mt-4">
            <FixedHolidays />
          </div>

          <div className="mt-4">
            <p className="cardDistance">
              <OptionalHolidays />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHolidays;
