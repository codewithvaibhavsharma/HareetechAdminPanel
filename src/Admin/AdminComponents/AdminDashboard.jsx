import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Styles/adminDashboard.css';
import AdminCard from "../../Components/AdminCard";
import AdminSidebar from "./AdminSidebar";
import EmployeeReport from "./EmployeeReport";
import AddEmployee from "./AddEmployee";
import TodaysAttendance from "./TodaysAttendance";

const AdminDashboard = () => {
  const isAuthenticated = localStorage.getItem('AdminAuth');
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/AdminDashboard'); 
    } else {
      console.log("User is not authenticated");
      navigate('/Login')
    }
  }, [isAuthenticated, navigate]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [companyName, setCompanyName] = useState('');
  useEffect(() => {
    const companyId = localStorage.getItem('CompanyId');
    if (companyId) {
      axios.get(`https://crudv2.onrender.com/api/company/${companyId}`)
        .then(res => setCompanyName(res.data.companyName))
        .catch(err => console.error('Fetch error:', err));
    }
  }, []);

  return (
    <>
      <main className="container-fluid p-4 bg-light">
        <div className="row">
          <AdminSidebar />
          
          <div className="col-md-9 ms-sm-auto col-lg-10">
            <h1 className="mx-2">Welcome, {companyName} 👋</h1>
            <p className="mx-2">Guiding the Authority: Well Directional Administration for Your Organization</p>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4 ml-1">
              <div className="col">
                <AdminCard number="8" title="Employees" subtitle="Currently Working" />
              </div>
              <div className="col">
                <AdminCard number="10" title="Running Projects" subtitle="Current Month" />
              </div>
              <div className="col">
                <AdminCard number="3" title="Pending Projects" subtitle="Current Month" />
              </div>
              <div className="col">
                <AdminCard number="1cr" title="Turn Over/yr" subtitle="Per Annum" />
              </div>
            </div>
            <TodaysAttendance />
            <EmployeeReport />
            <button className="btn mt-4 btn-lg dashboard-btn" onClick={openPopup}>Add New Employee</button>
            <AddEmployee isOpen={isPopupOpen} onClose={closePopup} />
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
