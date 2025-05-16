import React, { useState } from "react";
import { motion } from "framer-motion";
import { AdminUserRegistration } from "../../API/AdminUserRegistration";
import "../Styles/AddEmployee.css";

const AddEmployee = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await AdminUserRegistration(email, password, username, id, joiningDate, role, salary);
      if (data.status === "success") {
        alert("Employee Registration Successful");
      } else {
        alert(data.message || "Employee Registration Failed");
      }
      onClose();
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Employee Registration failed");
    }
  };

  return (
    <div className="modal-overlay">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="modal-container"
      >
        <h2 className="modal-heading">Add New Employee</h2>
        <form onSubmit={handleSubmit} className="modal-form">
        <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Emplyoee Name</label>
              <input type="text" className="form-control" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Emplyoee Id</label>
              <input type="text" className="form-control" onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="row mb-3">
          <div className="col-md-4">
          <label className="form-label">Email</label>
                <input type="email" className="form-control" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
              <label className="form-label">Phone No</label>
                <input type="number" className="form-control" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
              <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
              </div>
          </div>
          <div className="row mb-3">
          <div className="col-md-4">
          <label className="form-label">Department</label>
                <input type="text" className="form-control" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
              <label className="form-label">Job Titile</label>
                <input type="text" className="form-control" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="col-md-4">
              <label className="form-label">Salary</label>
                <input type="number" className="form-control" onChange={e => setPassword(e.target.value)} />
              </div>
          </div>

          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="modal-btn cancel">Cancel</button>
            <button type="submit" className="modal-btn submit">Add</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddEmployee;
