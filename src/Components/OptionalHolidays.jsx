import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OptionalHolidays = () => {
  const holidays = [
    { name: "Good Friday", date: "April 18, 2025", day: "Friday" },
    { name: "Eid-Ul-Fitr", date: "March 31, 2025", day: "Monday (Subject to moon sighting)" },
    { name: "Eid-Ul-Adha", date: "June 7, 2025", day: "Saturday (Subject to moon sighting)" },
    { name: "Guru Nanak Jayanti", date: "November 5, 2025", day: "Wednesday" },
  ];

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="text-dark fw-bold mb-3">Optional Holidays</h2>
        <hr />
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Holiday</th>
                <th>Date</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((holiday, index) => (
                <tr key={index}>
                  <td>{holiday.name}</td>
                  <td>{holiday.date}</td>
                  <td>{holiday.day}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-danger text-center mt-3" style={{ fontSize: "0.9rem" }}>
          *For any leave requests, employees must inform the HR department at least 15 days in advance for optional holidays.
        </p>
        <p className="text-center mt-2" style={{ fontSize: "0.9rem" }}>
          For more information, visit{" "}
          <a
            href="http://www.hareetech.com"
            className="fw-semibold text-decoration-none text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.hareetech.com
          </a>{" "}
          or email{" "}
          <a
            href="mailto:info@hareetech.com"
            className="fw-semibold text-decoration-none text-primary"
          >
            info@hareetech.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default OptionalHolidays;
