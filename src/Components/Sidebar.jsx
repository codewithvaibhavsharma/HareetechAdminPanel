import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { IoPersonCircle, IoBagCheckSharp } from "react-icons/io5";
import { BsPersonFillCheck, BsPersonXFill, BsEmojiSunglasses } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import Hareetech from '../assets/Hareetech.png';
import '../styles/Sidebar.css';
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Only for mobile
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('auth');
    alert('Logged out successfully!');
    navigate('/LoginPage', { replace: true });
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
              <li><Link to="/Dashboard" className="sidebar-link"><AiFillHome className="icon" /><span className="text">Dashboard</span></Link></li>
              <li><Link to="/Attendance" className="sidebar-link"><BsPersonFillCheck className="icon" /><span className="text">Attendance Panel</span></Link></li>
              <li><Link to="/Leaves" className="sidebar-link"><BsPersonXFill className="icon" /><span className="text">Leaves Panel</span></Link></li>
              <li><Link to="/Events" className="sidebar-link"><MdEventAvailable className="icon" /><span className="text">Events Panel</span></Link></li>
              <li><Link to="/Holidays" className="sidebar-link"><BsEmojiSunglasses className="icon" /><span className="text">Holiday Calendar</span></Link></li>
              <li><Link to="/Profile" className="sidebar-link"><IoPersonCircle className="icon" /><span className="text">Profile</span></Link></li>
              <li onClick={handleAdminLogout} className="sidebar-link"><FiLogOut className="icon" /><span className="text">Log Out</span></li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Sidebar;
