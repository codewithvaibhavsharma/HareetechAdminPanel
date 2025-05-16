import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Styles/EventPopup.css"; 
import { AddEvent } from "../../API/AddEvent";

const EventPopup = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [notice, setNotice] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [image, setImage] = useState("");
  const [contact_no, setContact_no] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) =>  {
    e.preventDefault();
    try{
      const formData = new FormData();
      formData.append("image", image);

      const data = await AddEvent(title, subtitle, description, notice, date, location, organizer, contact_no, formData);
      if (data.status === 'success') {
        alert('Event Creation Successfull');
      } else {
        alert(data.message || 'Event Creation Failed');
      }
      onClose();
    } catch (error) {
      console.error('Event Creation failed:', error.response?.data || error.message);
      alert('Event Creation failed');
    }
  };

  return (
    <div className="popup-overlay">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="popup-container"
      >
        <h2 className="popup-heading">Create an Event for Employees</h2>
        <form onSubmit={handleSubmit} className="popup-form" encType="multipart/form-data">
          <input type="text" name="title" placeholder="Event Title" className="popup-input" required onChange={(e)=> setTitle(e.target.value)} />
          <input type="text" name="subtitle" placeholder="Event Sub-title" className="popup-input" onChange={(e)=> setSubtitle(e.target.value)} />
          <textarea name="description" placeholder="Description" className="popup-input" rows="3" onChange={(e)=> setDescription(e.target.value)} />
          <input type="text" name="notice" placeholder="One Line Notice" className="popup-input" onChange={(e)=> setNotice(e.target.value)} />
          <input type="file" name="image" className="popup-input" onChange={(e)=> setImage(e.target.files[0])}/>
          <input type="date" name="date" className="popup-input" required onChange={(e)=> setDate(e.target.value)} />
          <input type="text" name="location" placeholder="Location" className="popup-input" required onChange={(e)=> setLocation(e.target.value)} />
          <input type="text" name="organizer" placeholder="Organizer" className="popup-input"  onChange={(e)=> setOrganizer(e.target.value)} />
          <input type="text" name="contact" placeholder="Contact Info" className="popup-input" onChange={(e)=> setContact_no(e.target.value)} />

          <div className="popup-buttons">
            <button type="button" onClick={onClose} className="popup-btn cancel">
              Cancel
            </button>
            <button type="submit" className="popup-btn submit">
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EventPopup;
