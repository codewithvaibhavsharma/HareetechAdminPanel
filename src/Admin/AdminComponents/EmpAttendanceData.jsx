import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AttendanceCard = () => {
  const [today, setToday] = useState({ date: "", day: "" });

  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, name: "John Doe", status: "Present" },
    { id: 2, name: "Jane Smith", status: "Absent" },
    { id: 3, name: "Michael Johnson", status: "Present" },
    { id: 4, name: "Emily Davis", status: "Present" },
    // Add more dummy records or fetch from API
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
      <div className="card shadow p-4 w-100" style={{ maxWidth: "700px" }}>
        <div className="text-center mb-4">
          <h4 className="text-primary">{today.date}</h4>
          <h5 className="text-secondary">Day: {today.day}</h5>
        </div>

        <h5 className="text-center mb-3">Employee Attendance Records</h5>

        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Sr. No</th>
              <th>Employee Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => (
              <tr key={record.id}>
                <td>{index + 1}</td>
                <td>{record.name}</td>
                <td
                  className={
                    record.status === "Present" ? "text-success" : "text-danger"
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

export default AttendanceCard;
