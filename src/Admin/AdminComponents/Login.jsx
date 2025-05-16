import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { CompanyLogin } from "../../API/CompanyLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Handlelogin = async (e) => {
    e.preventDefault();

    try {
      const data = await CompanyLogin(email, password);
      // console.log('Login API response:', data);   

      // Handle success — adjust based on API structure
      if (data.message==="Login successful") {
        alert('Login successful');
        localStorage.setItem('AdminAuth', true);
        localStorage.setItem('CompanyId', data.company._id);
        navigate('/AdminDashboard');
      } else {
        alert(data?.msg || 'Invalid credentials');
      }

    } 
    catch (error) {
      console.log('Login error:', error.response?.data || error.message);
      alert('Login failed: ' + (error.response?.data?.msg || error.message));
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-color mb-4">Access Company Portal</h2>
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px', zIndex: '1' }}>
        <h3 className="text-center mb-4 text-color">Log In</h3>
        <form onSubmit={Handlelogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email ID</label>
            <input
              type="email"
              name="email"
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
              name="password"
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
          <p>Don't have an Account? <NavLink to='/Signuppage'>Sign Up</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
