import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomeCard.css';

const Home = () => {
  return (
    <>
      <div className="container my-5">

        <div className="bg-light p-5 rounded shadow">
          <h1 className="text-color text-center mb-4">
            Hareetech Development Pvt. Ltd. Lucknow
          </h1>
          <p className="lead text-muted text-center">
            Hareetech Development Pvt. Ltd. is a leading software development company located in Lucknow, India. We specialize in innovative
            technology solutions, offering services ranging from web and mobile app development to enterprise-level software solutions.
            Our mission is to deliver high-quality, scalable, and cost-effective solutions that meet the needs of businesses worldwide.
          </p>
          <div className="d-flex justify-content-center flex-column align-items-center gap-3 mt-4">
            <NavLink to="/LoginPage" className="btn btn-bgcolor btn-text-color w-50">
              Authentication for Employees
            </NavLink>
            <NavLink to="/Login" className="btn btn-bgcolor btn-text-color w-50">
            Authentication for Company
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
