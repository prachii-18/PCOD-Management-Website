// src/components/Meditation.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Meditation.css"; // Add styling

const Meditation = () => {
  const navigate = useNavigate();

  return (
    <div className="meditation-container">
      <h1>Relax & Breathe 🌿</h1>
      <p>Take a deep breath and relax. Try a short meditation session.</p>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/6p_yaNFSYao" 
        title="Meditation Video"
        allowFullScreen
      ></iframe>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Meditation;
