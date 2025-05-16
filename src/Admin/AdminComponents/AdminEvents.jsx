import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import EventPopup from './EventPopup';
import EventCard from "../../Components/EventsCard";
import '../Styles/AdminEvents.css'

const AdminEvents = () => {
  const isAuthenticated = localStorage.getItem('AdminAuth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/AdminEvents'); 
    } else {
      console.log("User is not authenticated");
      navigate('/Login')
    }
  }, [isAuthenticated, navigate]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleEventSubmit = (data) => {
    console.log("Event Submitted:", data);
    console.log("Form submitted successfully, now you can show the data.");
  };

  return (
    <div className="container-fluid px-4">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <h1 className="mt-4">Events Management</h1>
          <p>Organized Events are referred for Employees</p>
          
          <h3 className="event-subHeading">Create an Event for Office Employees</h3>
          
          <button 
            className="btn Admin-eventBtn btn-lg" 
            onClick={() => setIsPopupOpen(true)}
          >
            Create an Event
          </button>

          <EventPopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            onSubmit={handleEventSubmit}
          />

          <div className="mt-4">
            <EventCard
              eventName="Company Anniversary"
              eventSubheading="Grow up the Company with spiritual energy."
              eventDescription="This is a puja-path ceremony for the company's bright future so it will grow up at every moment."
              eventDate="29th of April, 2025"
              eventNotice="All of you are informed that you must come on time on this special day."
              eventPoster="Hareetech Image"
              eventLocation="203, 2nd floor, Om Plaza, Munshipulia, Lucknow, UP, India"
              organizer="Hareetech Development Pvt. Ltd."
              contactInfo="6394181905"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;
