import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import "./GynacConsultation.css"; // Import styles

function GynacConsultation() {
  const navigate = useNavigate(); // Hook for navigation
  const [selectedDate, setSelectedDate] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(null); // New state for confirmation message

  // List of unavailable dates (you can update dynamically)
  const unavailableDates = ["2025-02-10", "2025-02-14", "2025-02-18"];

  // Function to check if a date is available
  const isAvailable = (date) => {
    const formattedDate = date.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    return !unavailableDates.includes(formattedDate);
  };

  // Function to handle the confirm button click
  const handleConfirmAppointment = () => {
    if (selectedDate && isAvailable(selectedDate)) {
      setConfirmationMessage("📧 Please contact helpgynac@gmail.com for confirmation.");
    }
  };

  return (
    <div className="gynac-container">
      <h1 className="gynac-title">👩‍⚕️ Gynaec Consultation</h1>
      <p className="gynac-intro">
        Your health matters! 💖 Consult with expert gynecologists to address any concerns, 
        get professional advice, and take control of your well-being.
      </p>

      <div className="gynac-info">
        <h2>✨ How can we help you today?</h2>
        <ul>
          <li>📌 Book a consultation with a trusted specialist.</li>
          <li>💬 Get guidance on PCOS, menstrual health, fertility, and more.</li>
          <li>📝 Receive a personalized care plan for better health.</li>
        </ul>
      </div>

      {/* Calendar for selecting appointment date */}
      <div className="calendar-container">
        <h3>Select Appointment Date 📅</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()} // Prevent past date selection
          filterDate={isAvailable} // Highlight available dates
          inline
        />
        {selectedDate && (
          <p className={`date-status ${isAvailable(selectedDate) ? "available" : "unavailable"}`}>
            {isAvailable(selectedDate) ? "✅ Available" : "❌ Not Available"}
          </p>
        )}
      </div>

      {/* Buttons for navigation */}
      <div className="gynac-buttons">
        <button
          className={`schedule-btn ${selectedDate && isAvailable(selectedDate) ? "enabled" : "disabled"}`}
          disabled={!selectedDate || !isAvailable(selectedDate)}
          onClick={handleConfirmAppointment}
        >
          📅 Confirm Appointment
        </button>
        <button className="back-btn" onClick={() => navigate("/")}>🔙 Back to Home</button>
      </div>

      {/* Display confirmation message */}
      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
    </div>
  );
}

export default GynacConsultation;
