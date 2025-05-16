import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { loginWithAPI } from '../API/loginwithAPI';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Handlelogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginWithAPI(email, password);
      if (data.status === 'success') {
        console.log('Login success:', data);
        alert('Login successful');
        navigate('/Dashboard');
        localStorage.setItem('auth', true);
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-color mb-4">Access Employee Portal</h2>
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px', zIndex:"1" }}>
        <h3 className="text-center text-color mb-4">Log In</h3>
        <form onSubmit={Handlelogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email ID</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-bgcolor btn-text-color">Log In</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p>Don't have an Account? <NavLink to='/Signup'>Sign Up</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
