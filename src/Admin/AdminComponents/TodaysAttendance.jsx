import React from "react";
import '../Styles/TodaysAttendance.css';

const TodaysAttendance = () => {
  const today = new Date().toLocaleDateString();

  const attendanceData = [
    { id: 1, name: "John Doe", empId: "EMP001", title: "Software Engineer", status: "Present" },
    { id: 2, name: "Jane Smith", empId: "EMP002", title: "UI/UX Designer", status: "Absent" },
    { id: 3, name: "Michael Brown", empId: "EMP003", title: "Project Manager", status: "Remote" },
    { id: 4, name: "Emily Johnson", empId: "EMP004", title: "QA Tester", status: "On Leave" },
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Today's Attendance</h2>
        <p className="text-muted">Date: {today}</p>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-thead">
            <tr>
              <th>Sr. No.</th>
              <th>Employee's Name</th>
              <th>Employee ID</th>
              <th>Job Title</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.empId}</td>
                <td>{employee.title}</td>
                <td>
                  <span className={`badge 
                    ${employee.status === "Present" ? "bg-success" : 
                      employee.status === "Absent" ? "bg-danger" :
                      employee.status === "Remote" ? "bg-primary" :
                      employee.status === "On Leave" ? "bg-warning text-dark" : "bg-secondary"}
                  `}>
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodaysAttendance;
