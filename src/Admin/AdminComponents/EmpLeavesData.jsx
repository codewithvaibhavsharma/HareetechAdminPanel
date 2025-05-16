import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EmpLeavesData = () => {
  const [today, setToday] = useState({ date: "", day: "" });

  const [leaveRecords, setLeaveRecords] = useState([
    { id: 1, name: "John Doe", leaveType: "Sick Leave", duration: "1 day", status: "Approved" },
    { id: 2, name: "Jane Smith", leaveType: "Casual Leave", duration: "2 days", status: "Pending" },
    { id: 3, name: "Michael Johnson", leaveType: "Annual Leave", duration: "5 days", status: "Rejected" },
    { id: 4, name: "Emily Davis", leaveType: "Maternity Leave", duration: "30 days", status: "Approved" },
    // Add more dummy records or integrate with your API
  ]);

  useEffect(() => {
    const dateObj = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObj.toLocaleDateString(undefined, options);
    const dayName = dateObj.toLocaleDateString(undefined, { weekday: "long" });

    setToday({ date: formattedDate, day: dayName });
  }, []);

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "800px" }}>
        <div className="text-center mb-4">
          <h4 className="text-dark">{today.date}</h4>
          <h5 className="text-secondary">Day: {today.day}</h5>
        </div>

        <h5 className="text-center mb-3">Employee Leave Records</h5>

        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Sr. No</th>
              <th>Employee Name</th>
              <th>Leave Type</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRecords.map((record, index) => (
              <tr key={record.id}>
                <td>{index + 1}</td>
                <td>{record.name}</td>
                <td>{record.leaveType}</td>
                <td>{record.duration}</td>
                <td
                  className={
                    record.status === "Approved"
                      ? "text-success"
                      : record.status === "Rejected"
                      ? "text-danger"
                      : "text-warning"
                  }
                >
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpLeavesData;
