import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const FixedHolidays = () => {
  const holidays = [
    { name: "New Year’s Day", date: "January 1, 2025", day: "Wednesday" },
    { name: "Republic Day", date: "January 26, 2025", day: "Sunday" },
    { name: "Maha Shivaratri", date: "February 26, 2025", day: "Wednesday" },
    { name: "Holi", date: "March 14, 2025", day: "Friday" },
    { name: "Ram Navami", date: "April 6, 2025", day: "Sunday" },
    { name: "Janmashtami", date: "August 16, 2025", day: "Saturday" },
    { name: "Independence Day", date: "August 15, 2025", day: "Friday" },
    { name: "Gandhi Jayanti", date: "October 2, 2025", day: "Thursday" },
    { name: "Dussehra", date: "October 2, 2025", day: "Thursday" },
    { name: "Diwali", date: "October 20, 2025", day: "Monday" },
    { name: "Govardhan Puja", date: "October 21, 2025", day: "Tuesday" },
    { name: "Christmas Day", date: "December 25, 2025", day: "Thursday" },
  ];

  return (
    <div className="container my-5" style={{zIndex:'-99'}}>
      <div className="card shadow p-4">
        <h2 className="text-dark fw-bold mb-3">Fixed Holidays</h2>
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
      </div>
    </div>
  );
};

export default FixedHolidays;
