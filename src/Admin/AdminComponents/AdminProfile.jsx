import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminProfileDetail from "./AdminProfileDetail";
import DummyDP from "../../assets/DummyDP.jpeg";
import '../Styles/AdminProfile.css';

const AdminProfile = () => {
  const isAuthenticated = localStorage.getItem('AdminAuth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/AdminProfile'); 
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
          <h1 className="mt-auto c-title">Admin's Profile</h1>
          <p className="mainTitle">Comprehensive Admin Information</p>

          <AdminProfileDetail
            name="Hello Mr."
            profilePicture={DummyDP}
            email="admin@example.com"
            username="admin"
            phone="0000000000"
            gender="male/female"
            role="your role"
            company="Hareetech Development Pvt. Ltd."
            address="ABC,123, city, state, country"
            adminRole="Admin"
            joiningDate="01/01/2020"
            bio="I am known as Admin in this company and xyz...."
            emergencyContact="000000000"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
