import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaXmark } from "react-icons/fa6";

const ProfileModal = ({ isOpen, onClose, onSave, formData, onChange }) => {
  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="profileModalLabel">Employee Details</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>

          <form>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  placeholder="Enter Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender:</label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={onChange}
                >
                  <option value="" disabled>--Select Gender--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone No:</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  placeholder="Enter Phone No"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="alphone" className="form-label">Alternate Phone No:</label>
                <input
                  type="number"
                  className="form-control"
                  id="alphone"
                  name="alphone"
                  value={formData.alphone}
                  onChange={onChange}
                  placeholder="Enter Alternate Phone No"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={onChange}
                  placeholder="Enter Address"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="profilepicture" className="form-label">Profile Picture:</label>
                <input
                  type="file"
                  className="form-control"
                  id="profilepicture"
                  name="profilepicture"
                  value={formData.profilepicture}
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="bio" className="form-label">Bio:</label>
                <textarea
                  className="form-control"
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={onChange}
                  rows="3"
                  placeholder="Write about yourself..."
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={onSave}>Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
