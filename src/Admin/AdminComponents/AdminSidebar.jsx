import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { IoPersonCircle, IoBagCheckSharp } from "react-icons/io5";
import { BsPersonFillCheck, BsPersonXFill, BsEmojiSunglasses } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import Hareetech from '../../assets/Hareetech.png';
import '../Styles/AdminSidebar.css';
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Only for mobile
  const isAuthenticated = localStorage.getItem('AdminAuth');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('AdminAuth');
    alert('Logged out successfully!');
    navigate('/Login', { replace: true });
  };

  const isMobile = window.innerWidth <= 767;

  return (
    <>
      {isAuthenticated && (
        <>
        {isMobile && (
            <FiAlignJustify className="toggle-icon" onClick={handleToggle} />
          )}
          {isMobile && isOpen && <div className="sidebar-backdrop" onClick={handleClose}></div>}

          <nav className={`sidebar ${isMobile && isOpen ? "active" : isMobile ? "" : "always-open"}`}>
            <div className="sidebar-header">
              <div className="logo-container">
                <img src={Hareetech} alt="Logo" className="sidebar-logo" />
              </div>
              { <h2 className="sidebar-title">Admin Panel</h2>}
            </div>

            <ul className="sidebar-links">
              <li><Link to="/AdminDashboard" className="sidebar-link"><AiFillHome className="icon" /><span className="text">Dashboard</span></Link></li>
              <li><Link to="/AdminDepartment" className="sidebar-link"><GiOfficeChair className="icon" /><span className="text">Department</span></Link></li>
              <li><Link to="/AdminJobTitle" className="sidebar-link"><IoBagCheckSharp className="icon" /><span className="text">Job Title</span></Link></li>
              <li><Link to="/AdminAttendance" className="sidebar-link"><BsPersonFillCheck className="icon" /><span className="text">Attendance</span></Link></li>
              <li><Link to="/AdminLeaves" className="sidebar-link"><BsPersonXFill className="icon" /><span className="text">Leaves MGMT</span></Link></li>
              <li><Link to="/AdminHolidays" className="sidebar-link"><BsEmojiSunglasses className="icon" /><span className="text">Holidays</span></Link></li>
              <li><Link to="/AdminEvents" className="sidebar-link"><MdEventAvailable className="icon" /><span className="text">Events MGMT</span></Link></li>
              <li><Link to="/AdminProfile" className="sidebar-link"><IoPersonCircle className="icon" /><span className="text">Profile</span></Link></li>
              <li onClick={handleAdminLogout} className="sidebar-link"><FiLogOut className="icon" /><span className="text">Log Out</span></li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default AdminSidebar;
