import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignwithAPI } from '../API/SignwithAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Signup.css"

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (email === '' || password === '' || username === '') {
      alert('Please fill in all fields');
      return;
    }

    const existingEmail = await SignwithAPI(email);
    if (existingEmail === email) {
      alert('Email already exists');
      return;
    }

    try {
      const data = await SignwithAPI(username, email, password);
      console.log('Signup success:', data);
      if (data.status === 'success') {
        alert('Signup successful');
        navigate('/LoginPage');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup failed:', err.response?.data || err.message);
      alert('Signup failed');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-color mb-4">Sign Up a New Account</h2>
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: '800px' }}>
        <h3 className="text-center text-color mb-4">Employee Sign Up</h3>
        <form onSubmit={handleSignup}>
          <div className="row mb-3">
          <label className="form-label">Employee Name</label>
          <input type="text" className="form-control" onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
            <label className="form-label">Email ID</label>
            <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="col-md-6">
            <label className="form-label">Phone No</label>
            <input type="number" className="form-control" onChange={e => setUsername(e.target.value)} />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
            <label className="form-label">Department</label>
            <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="col-md-6">
            <label className="form-label">Job Title</label>
            <input type="text" className="form-control" onChange={e => setUsername(e.target.value)} />
            </div>
          </div>

          <div className="mb-3">
            <div className="row g-2">
              <div className="col-md-4">
              <label className="form-label">Gender</label>
                <input type="text" className="form-control" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
              <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
              <label className="form-label">Joining Date</label>
                <input type="date" className="form-control" onChange={e => setPassword(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <div className="row g-2">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Address Line 1" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Address Line 2" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="City" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="State" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Country" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
                <input type="number" className="form-control" placeholder="PIN code" onChange={e => setPassword(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-bgcolor btn-text-color">Sign Up</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p>Already have an Account? <NavLink to='/LoginPage'>Log In</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
