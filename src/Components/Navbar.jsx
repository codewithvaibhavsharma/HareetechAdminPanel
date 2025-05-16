import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hareetech from '../assets/Hareetech.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adDropOpen, setAdDropOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setDropdownOpen(false);
    localStorage.removeItem('auth');
    alert('Logged out successfully!');
    navigate('/LoginPage', { replace: true });
  };

  const handleAdminLogout = () => {
    setAdDropOpen(false);
    localStorage.removeItem('AdminAuth');
    alert('Logged out successfully!');
    navigate('/Login', { replace: true });
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
    setAdDropOpen(false);
  };

  const isAuthenticated = localStorage.getItem('auth');
  const isAuthentication = localStorage.getItem('AdminAuth');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navbar px-3">
      <Link className="navbar-brand" to="/">
        <img src={Hareetech} alt="Logo" className="nav-logo" height="40" width="160" />
      </Link>


      <div className="ms-auto d-flex align-items-center gap-3 position-relative">
        {isAuthenticated && (
          <div className="dropdown menu-navbar">
            <button
              className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Menu 
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu dropdown-menu-end show mt-2">
                <li>
                  <Link className="dropdown-item" to="/Profile" onClick={handleLinkClick}>
                    Profile
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}

        {isAuthentication && (
          <div className="dropdown menu-navbar">
            <button
              className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
              onClick={() => setAdDropOpen(!adDropOpen)}
            >
              Menu 
            </button>
            {adDropOpen && (
              <ul className="dropdown-menu dropdown-menu-end show mt-2">
                <li>
                  <Link className="dropdown-item" to="/AdminProfile" onClick={handleLinkClick}>
                    Profile
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleAdminLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
