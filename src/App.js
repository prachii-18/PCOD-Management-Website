import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaRobot } from "react-icons/fa"; // Import icons
import MoodTracker from "./components/MoodTracker";
import StepTracker from "./components/StepTracker";
import WaterTracker from "./components/WaterTracker"; 
import Chatbot from "./components/Chatbot";
import GynacConsultation from "./components/GynacConsultation"; // Import Gynac Consultation Page
import Questionnaire from "./components/Questionnaire";
import Meditation from "./components/Meditation"; // ✅ Import Meditation Page
import Recipes from "./components/Recipes"; // ✅ Import Recipes Page
import "./App.css";

function HomePage() {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [selectedMood, setSelectedMood] = useState(null); // ✅ Track selected mood
  const totalTasks = 3; // Mood, Steps, Water
  const navigate = useNavigate(); // React Router Hook

  // Function to update task completion
  const updateTasks = () => {
    if (tasksCompleted < totalTasks) {
      setTasksCompleted(tasksCompleted + 1);
    }
  };

  // ✅ Check mood and redirect if "Angry" or "Sad"
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    if (mood === "Angry" || mood === "Sad") {
      navigate("/meditation"); // Redirect to Meditation page
    }
  };

  const progress = (tasksCompleted / totalTasks) * 100;

  return (
    <div className="app-container">
      {/* Sidebar Menu */}
      <div className={`sidebar ${showSidebar ? "active" : ""}`}>
        <ul>
          <li onClick={() => alert("My Profile Clicked")}>My Profile</li>
          <li onClick={() => setShowChatbot(true)}>Chatbot</li>
          <li onClick={() => navigate("/gynac")}>Gynac Consultation</li> {/* Navigation to Gynac Page */}
          <li onClick={() => navigate("/recipes")}>Healthy Recipes</li> {/* ✅ Navigation to Recipes Page */}
          <li onClick={() => alert("Settings Clicked")}>Settings</li>
        </ul>
      </div>

      {/* Sidebar Toggle Button */}
      <div className="menu-icon" onClick={() => setShowSidebar(!showSidebar)}>
        <FaBars className="icon" />
      </div>

      {/* User Icon */}
      <div className="user-icon" onClick={() => setShowUserInfo(!showUserInfo)}>
        <FaUserCircle className="icon" />
        {showUserInfo && (
          <div className="user-info">
            <p><strong>Name:</strong> Alice</p>
            <p><strong>Email:</strong> alice123@example.com</p>
          </div>
        )}
      </div>

      {/* Main Title */}
      <h1 className="title">Femora</h1>
      <p className="subtitle">Track. Manage. Thrive.</p>

     

      {/* ✅ Questionnaire Component */}
      <Questionnaire />

      {/* Task Components */}
      <div className="tasks">
        <div className="task">
          <h3>Mood Tracker</h3>
          <MoodTracker onMoodSelect={handleMoodSelect} /> {/* ✅ Mood Selection Passed */}
          <button onClick={updateTasks}>Complete Mood Task</button>
        </div>
        <div className="task">
          <h3>Steps Today 🏃‍♀️</h3>
          <StepTracker />
          <button onClick={updateTasks}>Complete Step Task</button>
        </div>
        <div className="task">
          <h3>Water Intake 💧</h3>
          <WaterTracker />
          <button onClick={updateTasks}>Complete Water Task</button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {tasksCompleted}/{totalTasks} Tasks Completed
        </div>
      </div>

      {/* Floating Chatbot Icon */}
      <div className="chatbot-icon" onClick={() => setShowChatbot(!showChatbot)}>
        <FaRobot className="robot-icon" />
      </div>

      {/* Chatbot Interface */}
      {showChatbot && (
        <div className="chatbot-container">
          <button className="close-chatbot" onClick={() => setShowChatbot(false)}>✖</button>
          <Chatbot />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gynac" element={<GynacConsultation />} />
        <Route path="/meditation" element={<Meditation />} /> {/* ✅ Meditation Page */}
        <Route path="/recipes" element={<Recipes />} /> {/* ✅ Recipes Page */}
      </Routes>
    </Router>
  );
}

export default App;
