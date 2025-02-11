// src/components/MoodTracker.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MoodTracker.css"; 

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const navigate = useNavigate();

  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😞", label: "Sad" },
    { emoji: "😡", label: "Angry" },
  ];

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);

    // If mood is bad, redirect to meditation page
    if (mood === "😞" || mood === "😡") {
      setTimeout(() => {
        navigate("/meditation");
      }, 1000);
    }
  };

  return (
    <div className="mood-tracker">
      <h2>Mood Tracker</h2>
      <p>Mood Today</p>
      <div className="mood-options">
        {moods.map((m) => (
          <button
            key={m.emoji}
            className={`mood-btn ${selectedMood === m.emoji ? "selected" : ""}`}
            onClick={() => handleMoodSelection(m.emoji)}
          >
            {m.emoji}
          </button>
        ))}
      </div>
      {selectedMood && (
        <p>
          {selectedMood === "😊" || selectedMood === "😐"
            ? "You're doing fine! Keep it up! 😊"
            : `Selected: ${selectedMood}`}
        </p>
      )}
    </div>
  );
};

export default MoodTracker;
