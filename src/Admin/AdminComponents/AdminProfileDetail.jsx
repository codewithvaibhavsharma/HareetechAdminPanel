import React, { useState } from "react";
import "../Styles/AdminProfileDetail.css";
import AdminProfileModal from "./AdminProfileModal";

const AdminProfileDetail = ({
  username,
  profilePicture,
  name,
  email,
  Admin_ID,
  phone,
  Gender,
  role,
  company,
  address,
  bio,
  emergencyContact,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    name: '',
    profilePicture: '',
    username: '',
    email: '',
    phone: '',
    role: '',
    company: '',
    location: '',
    joiningDate: '',
    bio: '',
    emergencyContact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (employee) => {
    setEmployeeData(employee);
    setShowModal(true);
  };

  const handleSave = () => {
    console.log("Updated Employee Data:", employeeData);
    setShowModal(false);
    // Add backend API call here
  };

  return (<>
    <div className="card shadow-sm p-4 mt-5">
      <div className="text-center mb-3">
        <img
          src={profilePicture}
          alt="Profile"
          className="profile-picture img-fluid rounded-circle border border-3"
          style={{ width: "100px", height: "100px" }}
        />
        <h2 className="profile-name mt-3">{name}</h2>
        <p className="profile-role text-muted">{role} - {company}</p>
      </div>
      
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td><strong>Username:</strong></td>
            <td>{username}</td>
          </tr>
          <tr>
            <td><strong>Admin ID:</strong></td>
            <td>{Admin_ID}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><strong>Gender:</strong></td>
            <td>{Gender}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>{address}</td>
          </tr>
          <tr>
            <td><strong>Alternate Phone No:</strong></td>
            <td>{emergencyContact}</td>
          </tr>
          {bio && <tr><td><strong>Bio:</strong></td><td>{bio}</td></tr>}
        </tbody>
      </table>

      <button
        className="btn btn-color w-100 mt-3 "
        onClick={() => setShowModal(false)}
        style={{zIndex:1}}
      >
        Edit Profile
      </button>

      <AdminProfileModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        formData={employeeData}
        onChange={handleChange}
        onClick={handleEdit}
      />
    </div>
    </>
  );
};

export default AdminProfileDetail;
