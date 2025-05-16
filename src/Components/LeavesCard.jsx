import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/LeavesCard.css';
import { Leaves } from "../API/Leaves";

const LeavesCard = () => {
  const getCurrentTime = () => {
    const today = new Date();
    return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  };

  const [formData, setFormData] = useState({
    reason: '',
    time: getCurrentTime(),
    leavedays: '',
    fromDate: '',
    toDate: '',
  });

  const [leaveRecords, setLeaveRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add current formData to records
    setLeaveRecords(prev => [...prev, { ...formData, time: getCurrentTime() }]);

    // Reset the form
    setFormData({
      reason: '',
      time: getCurrentTime(),
      leavedays: '',
      fromDate: '',
      toDate: '',
    });
  };

  return (
    <>
      <div className="card shadow-sm p-3 mb-4 " >
        <div className="card-header text-center">
          <h2>Apply for Leave</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3" style={{zIndex:99}}>
            <div className="col-md-6">
              <input
                type="text"
                name="reason"
                className="form-control"
                placeholder="Reason for Leave"
                value={formData.reason}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="date"
                name="fromDate"
                className="form-control"
                value={formData.fromDate}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="number"
                name="leavedays"
                className="form-control"
                placeholder="No. of Days for Leave"
                value={formData.leavedays}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="date"
                name="toDate"
                className="form-control"
                value={formData.toDate}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-bg-color w-100">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow-sm p-3 mb-4">
        <div className="card-header text-center">
          <h2>Leaves History</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Date From</th>
                  <th>Date To</th>
                  <th>No. of days for leave</th>
                  <th>Time</th>
                  <th>Reason for Leave</th>
                </tr>
              </thead>
              <tbody>
                {leaveRecords.map((rec, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{rec.fromDate}</td>
                    <td>{rec.toDate}</td>
                    <td>{rec.leavedays}</td>
                    <td>{rec.time}</td>
                    <td>{rec.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeavesCard;
