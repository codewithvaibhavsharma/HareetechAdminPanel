import './styles/index.css';
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Signup from './Components/SignUp';
import Home from './Components/HomeCard';
import Navbar from './Components/Navbar'; 
import Dashboard from './Components/Dashboard';
import Attendance from './Components/Attendance';
import Leaves from './Components/Leaves';
import Holidays from './Components/Holidays';
import Events from './Components/Events';
import Profile from './Components/Profile';
import Login from './Admin/AdminComponents/Login';
import Signuppage from './Admin/AdminComponents/Signuppage';
import AdminDashboard from './Admin/AdminComponents/AdminDashboard';
import AdminSidebar from './Admin/AdminComponents/AdminSidebar';
import AdminAttendance from './Admin/AdminComponents/AdminAttendance';
import AdminEvents from './Admin/AdminComponents/AdminEvents';
import AdminHolidays from './Admin/AdminComponents/AdminHolidays';
import AdminLeaves from './Admin/AdminComponents/AdminLeaves';
import AdminProfile from './Admin/AdminComponents/AdminProfile';
import AdminDepartment from './Admin/AdminComponents/AdminDepartment';
import AdminJobTitle from './Admin/AdminComponents/AdminJobTitle';




const App = () => {
  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Attendance" element={<Attendance/>} />
              <Route path="/Leaves" element={<Leaves/>} />
              <Route path="/Holidays" element={<Holidays/>} />
              <Route path="/Events" element={<Events/>} />
              <Route path="/Profile" element={<Profile/>} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signuppage" element={<Signuppage/>} />
              <Route path="/Admindashboard" element={<AdminDashboard/>} />
              <Route path="/AdminSidebar" element={<AdminSidebar/>} />
              <Route path="/AdminAttendance" element={<AdminAttendance/>} />
              <Route path="/AdminEvents" element={<AdminEvents/>} />
              <Route path="/AdminHolidays" element={<AdminHolidays/>} />
              <Route path="/AdminLeaves" element={<AdminLeaves/>} />
              <Route path="/AdminProfile" element={<AdminProfile/>} />
              <Route path="/AdminDepartment" element={<AdminDepartment/>} />
              <Route path="/AdminJobTitle" element={<AdminJobTitle/>} />
              
            </Routes>
  </BrowserRouter>
  )
}



export default App;