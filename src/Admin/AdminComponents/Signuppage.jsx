import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CompanyRegistration } from "../../API/CompanyRegistration";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/signup.css';

const Signuppage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    industryType: "",
    website: "",
    address: {
      addressline1: "",
      addressline2: "",
      city: "",
      state: "",
      country: "",
      pincode: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is in the address object
    if (name in formData.address) {
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [name]: value
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (typeof formData[key] === 'string') {
        if (formData[key].trim() === '') {
          alert('Please fill in all fields');
          return;
        }
      } else if (typeof formData[key] === 'object') {
        for (const subKey in formData[key]) {
          if (formData[key][subKey].trim() === '') {
            alert('Please fill in all address fields');
            return;
          }
        }
      }
    }


    try {
      const data = await CompanyRegistration(formData.companyName, formData.ownerName, formData.username, formData.email, formData.phoneNo, formData.password, formData.industryType, formData.website, formData.address);
      console.log("Registration successful:", data);

      if (data.msg === 'Company registered 🎉') {
        alert("Company registered successfully!");
        navigate('/Login');
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      alert('Registration failed: ' + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-color mb-4">Sign Up a New Account</h2>
      <div className="card p-4 shadow mx-auto my-5" style={{ maxWidth: '800px', zIndex: '1' }}>
        <h3 className="text-center mb-4 text-color">Company Sign Up</h3>
        <form onSubmit={handleSignup}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Company Name</label>
              <input type="text" className="form-control" name="companyName" value={formData.companyName} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Owner Name</label>
              <input type="text" className="form-control" name="ownerName" value={formData.ownerName} onChange={handleChange} />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone No</label>
            <input type="number" className="form-control" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <div className="row g-2">
              <div className="col-md-6">
                <input type="text" className="form-control" name="addressline1" placeholder="Address Line 1" value={formData.address.addressline1} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="addressline2" placeholder="Address Line 2" value={formData.address.addressline2} onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" name="city" placeholder="City" value={formData.address.city} onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" name="state" placeholder="State" value={formData.address.state} onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" name="country" placeholder="Country" value={formData.address.country} onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <input type="number" className="form-control" name="pincode" placeholder="PIN code" value={formData.address.pincode} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Industry Type</label>
            <input type="text" className="form-control" name="industryType" value={formData.industryType} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Website</label>
            <input type="text" className="form-control" name="website" value={formData.website} onChange={handleChange} />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-bgcolor btn-text-color">Sign Up</button>
          </div>
        </form>

        <div className="text-center mt-3">
          <p>Already have an Account? <NavLink to='/Login'>Log In</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
