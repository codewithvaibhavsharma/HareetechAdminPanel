import React from 'react';
import { FaXmark } from "react-icons/fa6";

const AdminProfileModal = ({ isOpen, onClose, onSave, formData, onChange }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Update Admin Profile</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" value={formData.name} onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="adminid" className="form-label">Admin ID:</label>
                <input type="text" className="form-control" id="adminid" placeholder="Enter Admin Id" name="adminid" value={formData.adminid} onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender:</label>
                <select id="gender" className="form-select" name="gender" value={formData.gender} onChange={onChange}>
                  <option selected disabled>--Select Gender--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone No:</label>
                <input type="number" className="form-control" id="phone" placeholder="Enter Phone No" name="phone" value={formData.phone} onChange={onChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="alphone" className="form-label">Alternate Phone No:</label>
                <input type="number" className="form-control" id="alphone" placeholder="Enter Alternate Phone No" name="alphone" value={formData.alphone} onChange={onChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address:</label>
                <input type="text" className="form-control" id="address" placeholder="Enter Location" name="address" value={formData.address} onChange={onChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="profilepicture" className="form-label">Profile Picture:</label>
                <input type="file" className="form-control" id="profilepicture" name="profilepicture" value={formData.profilepicture} onChange={onChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="bio" className="form-label">Bio:</label>
                <textarea className="form-control" id="bio" placeholder="Write about yourself..." name="bio" value={formData.bio} onChange={onChange} rows={3} />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={onSave}>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileModal;
