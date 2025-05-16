import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EventCard = ({
  eventName,
  eventSubheading,
  eventDescription,
  eventDate,
  eventNotice,
  eventPoster,
  eventLocation,
  organizer,
  contactInfo,
}) => {
  return (
    <div className="card shadow mx-auto mt-5 p-4" style={{ maxWidth: "800px" }}>
      <div className="text-center mb-3">
        <h4 className="text-warning fw-bold">{eventName}</h4>
        <h6 className="text-muted">{eventSubheading}</h6>
      </div>
      <div className="card-body">
        <p className="mb-2">{eventDescription}</p>
        {eventNotice && (
          <p className="text-danger fw-semibold">
            <strong>Notice:</strong> {eventNotice}
          </p>
        )}
        {eventPoster && (
          <div className="text-center my-3">
            <img
              src={eventPoster}
              alt={eventName}
              className="img-fluid rounded"
              style={{ maxHeight: "150px", objectFit: "cover" }}
            />
          </div>
        )}
        <ul className="list-unstyled">
          <li className="mb-1">
            <strong>Event Date:</strong> {eventDate}
          </li>
          <li className="mb-1">
            <strong>Location:</strong> {eventLocation}
          </li>
          <li className="mb-1">
            <strong>Organizer:</strong> {organizer}
          </li>
          <li className="mb-1">
            <strong>Contact Info:</strong> {contactInfo}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventCard;
