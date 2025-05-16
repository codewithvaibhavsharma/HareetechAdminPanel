import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileModal from "./ProfileModal";
import '../styles/ProfileDetails.css'

const AdminProfileCard = ({
  name,
  profilePicture,
  username,
  empId,
  email,
  phone,
  gender,
  role,
  company,
  address,
  joiningDate,
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

  return (
    <div className="card shadow-sm p-4 mb-4">
      <div className="card-body text-center">
        <img
          src={profilePicture}
          alt="Profile"
          className="rounded-circle border border-dark mb-3"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <h2 className="card-title">{name}</h2>
        <p className="text-muted">{role} - {company}</p>
      </div>
      <table className="table table-borderless">
        <tbody className="td-text">
          <tr>
            <td><strong>Username:</strong></td><td>{username}</td>
          </tr>
          <tr>
            <td><strong>Employee Id:</strong></td><td>{empId}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td><td>{email}</td>
          </tr>
          <tr>
            <td><strong>Phone No:</strong></td><td>{phone}</td>
          </tr>
          <tr>
            <td><strong>Gender:</strong></td><td>{gender}</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td><td>{address}</td>
          </tr>
          <tr>
            <td><strong>Joining Date:</strong></td><td>{joiningDate}</td>
          </tr>
          <tr>
            <td><strong>Alternate Phone No:</strong></td><td>{emergencyContact}</td>
          </tr>
          {bio && <tr><td><strong>Bio:</strong></td><td>{bio}</td></tr>}
        </tbody>
      </table>
      <button className="btn btn-bg-color w-100" onClick={() => setShowModal(true)}>Edit Profile</button>
      <ProfileModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        formData={employeeData}
        onChange={handleChange}
        onClick={handleEdit}
      />
    </div>
  );
};

export default AdminProfileCard;
