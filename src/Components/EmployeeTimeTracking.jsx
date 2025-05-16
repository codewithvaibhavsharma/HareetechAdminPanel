import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/EmployeeTimeTracking.css';
// import { attendance } from "../API/Attendance";

const EmployeeTimeTracking = () => {
  const [isCheckedIn, setIsCheckedIn] = useState();
  const [records, setRecords] = useState([]);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currDate = `${date}/${month}/${year}`;
    const currTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const day = today.toLocaleDateString('en-US', { weekday: 'long' });

    setRecords(prev => [
      ...prev,
      {
        id: prev.length + 1,
        date: currDate,
        day,
        checkIn: currTime,
        checkOut: '',
        duration:' ',
      }
    ]);
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    const today = new Date();
    const checkOutTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
    setRecords(prev =>
      prev.map((record, index) => {
        if (index === prev.length - 1) {
          // Parse checkIn and checkOut time to Date objects
          const [inH, inM, inS] = record.checkIn.split(':').map(Number);
          const [outH, outM, outS] = checkOutTime.split(':').map(Number);
  
          const checkInDate = new Date();
          checkInDate.setHours(inH, inM, inS);
  
          const checkOutDate = new Date();
          checkOutDate.setHours(outH, outM, outS);
  
          const diffMs = checkOutDate - checkInDate;
          const hours = Math.floor(diffMs / (1000 * 60 * 60));
          const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  
          const duration = `${hours}h ${minutes}m ${seconds}s`;
  
          return {
            ...record,
            checkOut: checkOutTime,
            duration: duration
          };
        }
        return record;
      })
    );
  };
  

  return (
    <>
      <div className="card shadow text-center p-4 mx-auto mt-5" style={{ maxWidth: '400px',zIndex:"1" }}>
        <h3>Employee Time Tracking</h3>
        <hr />
        <div className="d-flex justify-content-around mt-3 flex-wrap gap-2">
          <button className="btn btn-bg-color" onClick={handleCheckIn} disabled={isCheckedIn}>
            Check In
          </button>
          <button className="btn btn-bg-color" onClick={handleCheckOut} disabled={!isCheckedIn}>
            Check Out
          </button>
        </div>
      </div>

      <div className="card shadow p-4 data-card  mt-5" style={{ width: '95%' }}>
        <div className="text-center mb-3">
          <h4>Attendance Report</h4>
          <hr />
        </div>
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-bg-color">
              <tr>
                <th>Sr.No</th>
                <th>Date</th>
                <th>Day</th>
                <th>Check-In Time</th>
                <th>Check-Out Time</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec) => (
                <tr key={rec.id}>
                  <td>{rec.id}</td>
                  <td>{rec.date}</td>
                  <td>{rec.day}</td>
                  <td>{rec.checkIn}</td>
                  <td>{rec.checkOut}</td>
                  <td>{rec.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeTimeTracking;
  