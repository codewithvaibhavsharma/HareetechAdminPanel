import React from "react";
import "../Styles/EmployeeReport.css"; // Optional CSS styling
import { RiAccountPinBoxFill } from "react-icons/ri";

const EmployeeReport = () => {
  const employees = [
    {
      name: "John Doe",
      empId: "EMP001",
      attendance: "95%",
      leaves: 2,
      joiningDate: "2023-01-15",
      role: "Frontend Developer",
      salary: "₹60,000"
    },
    {
      name: "Jane Smith",
      empId: "EMP002",
      attendance: "90%",
      leaves: 4,
      joiningDate: "2022-08-10",
      role: "Backend Developer",
      salary: "₹65,000"
    },
    {
      name: "Rahul Sharma",
      empId: "EMP003",
      attendance: "97%",
      leaves: 1,
      joiningDate: "2021-05-21",
      role: "Full Stack Developer",
      salary: "₹80,000"
    }
  ];

  return (
    <div className="employee-report-container">
      <h2 className="emp-headline">Employee List</h2>
      <table className="employee-report-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Employee's Name</th>
            <th>Emp ID</th>
            <th>Department</th>
            <th>Job Title</th>
            <th>Joining Date</th>
            <th>Attendance</th>
            <th>Leaves</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.empId}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.empId}</td>
              <td>{emp.role}</td>
              <td>{emp.salary}</td>
              <td>{emp.joiningDate}</td>
              <td>{emp.attendance}</td>
              <td>{emp.leaves}</td>
              <td><RiAccountPinBoxFill /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeReport;
