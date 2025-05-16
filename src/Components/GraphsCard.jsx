import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  { month: "Jan", attendance: 22 },
  { month: "Feb", attendance: 20 },
  { month: "Mar", attendance: 23 },
  { month: "Apr", attendance: 25 },
  { month: "May", attendance: 21 },
  { month: "Jun", attendance: 24 },
  { month: "Jul", attendance: 22 },
  { month: "Aug", attendance: 23 },
  { month: "Sep", attendance: 24 },
  { month: "Oct", attendance: 22 },
  { month: "Nov", attendance: 25 },
  { month: "Dec", attendance: 21 },
];

const AttendanceCard = ({ heading }) => {
  return (
    <div className="card text-white bg-dark shadow-sm p-3 rounded w-100" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-3">{heading}</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="month" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: "#333", color: "#fff", border: "none" }}
              cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
            />
            <Bar dataKey="attendance" fill="#d3d3d3" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceCard;
