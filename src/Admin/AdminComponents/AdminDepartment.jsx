import React, { useState, useEffect } from "react";
import '../Styles/AdminDepartment.css';
import AdminSidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";
import { CompanyDepartments } from "../../API/CompanyDepartments";
import axios from "axios";


const AdminDepartment = () => {
  const isAuthenticated = localStorage.getItem('AdminAuth');
  const navigate = useNavigate();
  const [departmentName, setDepartmentName] = useState("");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/AdminDepartment');
      getDepartments();
    } else {
      console.log("User is not authenticated");
      navigate('/Login')
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const companyId = localStorage.getItem('CompanyId');
    try {
      const data = await CompanyDepartments(companyId, departmentName);
      console.log('data :', data);
      if (data.message === 'Department created successfully!') {
        alert("Department created successfully");
        setDepartments((prev) => [...prev, data.department]);
        setDepartmentName("");
        localStorage.setItem('DepartmentId', data.department._id);  
      }
    }
    catch (error) {
      alert("Department creation failed: " + (error.response?.data?.message || error.message));
    }
  };

  const getDepartments = async () => {
    const companyId = localStorage.getItem('CompanyId');
    try {
      const response = await axios.get(`https://crudv2.onrender.com/api/department/company/${companyId}`);
      if (response.status === 200 && response.data) {
        setDepartments(response.data);
      } else {
        alert('No departments found');
      }
    } catch (error) {
      console.error('GET departments error:', error);
      alert('Failed to load departments: ' + (error.response?.data?.message || error.message));
    }
  };

    const deleteDepartment = async (_id) => {
    try {
      const depart_id = await axios.get(`https://crudv2.onrender.com/api/department/company/${_id}`);
      if (response.status === 200 && response.data) {
        setDepartments(response.data);
      }
      console.log(depart_id);
      const response = await axios.delete(`https://crudv2.onrender.com/api/department/${depart_id}`);
      console.log(response);
      console.log(response.data);
      if (response.status === 200) {
        
        setDepartments((prev) => prev.filter((dept) => dept._id !== _id));
        alert('Department deleted successfully');
      }
    } catch (error) {
      console.error('DELETE department error:', error);
      alert('Failed to delete department: ' + (error.response?.data?.message || error.message));
    }
  };



  const toggleStatus = async (_id, status) => {
    try {
      const Departmentid = localStorage.getItem('DepartmentId');  
      const response = await axios.put(`https://crudv2.onrender.com/api/department/${Departmentid}`, {
        isActive: !status
      });

      if (response.status === 200) {
        setDepartments((prev) =>
          prev.map((dept) =>
            dept.id === _id ? { ...dept, isActive: !status } : dept
          )
        );
      }
    } catch (error) {
      console.error('Status toggle failed:', error);
      alert('Failed to update department status');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <AdminSidebar />
      <h2 className="mb-4 text-center">Departments in the Company</h2>

      <form className="w-50 mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="departmentName" className="form-label">Department Name</label>
          <input
            type="text"
            className="form-control text-center"
            id="departmentName"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-bg-color w-50">Submit</button>
        </div>
      </form>

      {departments.length > 0 && (
        <div>
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>Sr. No</th>
                <th>Department Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, index) => (
                <tr key={dept._id}>
                  <td>{index + 1}</td>
                  <td>{dept.departmentName}</td>
                  <td>
                    Department {!dept.isActive ? 'Activated' : 'Inactivated'}
                  </td>
                  <td style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', gap:"5px" }}>
                    <button className="btn btn-warning">Edit</button>
                                        {/* <button
                      className={`btn ${dept.isActive ? 'btn-success' : 'btn-secondary'}`}
                      onClick={() => toggleStatus(dept._id, dept.isActive)}
                    >
                      {dept.isActive ? 'Active' : 'Inactive'}
                    </button> */}
                    <button className="btn btn-danger" onClick={deleteDepartment}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDepartment;
