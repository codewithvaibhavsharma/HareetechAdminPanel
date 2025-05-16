import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminCard = ({ number, title, subtitle }) => {
  return (
    <div className=" card text-center shadow-sm rounded p-3 mx-auto" style={{ width: '250px', height: '130px', zIndex:'1' }}>
      <div className="d-flex flex-column justify-content-center h-100">
        <h1 className="text-color fw-bold fs-2 mb-1">{number}</h1>
        <h2 className="text-dark fs-5 fw-semibold mb-1">{title}</h2>
        <p className="text-secondary fs-6 mb-0">{subtitle}</p>
      </div>
    </div>
  );
};

export default AdminCard;
