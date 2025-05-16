import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventCard from "./EventsCard";
import Hareetech from '../assets/HareetechDev.jpeg';
import Sidebar from "./Sidebar";
import '../styles/Events.css'

const Events = () => {
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      navigate('/Events'); 
    } else {
      console.log("User is not authenticated");
      navigate('/LoginPage');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-4 box-margin">
        <h1 className="mb-3">Events Portal</h1>
        <p className="text-muted fs-5">Organised Events are referred for Employees</p>

        <EventCard 
          eventName="Company Anniversary"
          eventSubheading="Grow up the Company with spiritual energy."
          eventDescription="This is a puja-path ceremony for company's bright future so it will grow up at every moment."
          eventDate="29th of April, 2025"
          eventNotice="All of you are informed that you have to come on time on this special day."
          eventPoster={Hareetech}
          eventLocation="203, 2nd floor, Om plaza, Munshipulia, Lucknow, UP, India"
          organizer="Hareetech Development Pvt. Ltd."
          contactInfo="6394181905"
        />

        <EventCard 
          eventName="Internship Training"
          eventSubheading="Grow up interested students in the IT field"
          eventDescription="This is a training program for students who are interested in the IT field. This program will help them grow in their careers."
          eventDate="2nd of April, 2025"
          eventNotice="All of you are informed that the event may take 4 to 5 months, so be ready for this event."
          eventPoster={Hareetech}
          eventLocation="203, 2nd floor, Om plaza, Munsipulia, Lucknow, UP, India"
          organizer="Hareetech Development Pvt. Ltd."
          contactInfo="6394181905"
        />
      </div>
    </div>
  );
};

export default Events;
