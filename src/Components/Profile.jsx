import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileDetails from "./ProfileDetails";
import DummyDP from "../assets/DummyDP.jpeg";
import Sidebar from "./Sidebar";
import { SignwithAPI } from "../API/SignwithAPI";
import '../styles/Profile.css'

const Profile = () => {
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/Profile'); 
    } else {
      console.log("User is not authenticated");
      navigate('/LoginPage');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-4 box-margin">
        <h1 className="text-align mb-3">Employee's Profile</h1>
        <p className="text-center text-color fs-5">Comprehensive Employee Information</p>

        <ProfileDetails 
          name="Hello Mr."
          profilePicture={DummyDP}
          email=""
          username=""
          phone=""
          role="your role"
          company="Hareetech Development Pvt. Ltd."
          address=" "
          joiningDate=" "
          managedTeams="NA"
          bio=" "
          emergencyContact=" "
        />
      </div>
    </div>
  );
};

export default Profile;
