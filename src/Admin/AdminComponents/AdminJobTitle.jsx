import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/adminDashboard.css';
import AdminSidebar from "./AdminSidebar";
import { CompanyJobTitle } from "../../API/CompanyJobTitle";
import axios from "axios";


const AdminJobTitle = () => {
  const isAuthenticated = localStorage.getItem('AdminAuth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/AdminJobTitle');
    } else {
      console.log("User is not authenticated");
      navigate('/Login')
    }
    getDepartments();
  }, [isAuthenticated, navigate]);

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [departments, setDepartments] = useState([]);
  const getDepartments = async () => {
    const companyId = localStorage.getItem('CompanyId');
    try {
      const response = await axios.get(`https://crudv2.onrender.com/api/department/company/${companyId}`);
      if (response.status === 200 && response.data) {
        setDepartments(response.data);
      } else {
        setDepartments([]);
      }
    } catch (error) {
      console.error('GET departments error:', error);
      setDepartments([]);
    }
  };

  // const groupedJobs = departments.map((dept) => ({
  //   department: dept.departmentName,
  //   jobs: jobTitles.filter((job) => job.departmentId === dept._id),
  // }));

  const [jobTitle, setJobTitle] = useState("");
  const [jobTitles, setJobTitles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!selectedDepartment) {
    alert("Please select a department");
    return;
  }
    try {
      const companyId = localStorage.getItem('CompanyId');
      const departmentId = selectedDepartment;
      const data = await CompanyJobTitle(companyId, departmentId, jobTitle);
      if (data.message === 'Job title created successfully!') {
        alert("Job Title created successfully");
        setJobTitles((prev) => [...prev, data.jobTitle]);
        setJobTitle("");
      }
      else{
        alert("Error creating job title");
      }
    }
    catch (error) {
      alert("Job Title creation failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <AdminSidebar />
      <h2 className="mb-4 text-center">Job Titles in the Company</h2>

      <form className="w-50 mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">

          <label htmlFor="jobTitle" className="form-label">Department</label>
          <select class="form-select" aria-label="Select Department"
          value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
            <option value="">---Select Department---</option>
            {departments.length > 0 ? (
            departments.map((dept) => (
              <option key={dept._id} value={dept._id}>
                {dept.departmentName}
              </option>
            ))) : (
      <option value="" disabled>No departments found</option>
    )}
    </select>

          <label htmlFor="jobTitle" className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control text-center"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-center" >
          <button type="submit" className="btn btn-bg-color w-50" style={{ zIndex: 0 }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdminJobTitle;


