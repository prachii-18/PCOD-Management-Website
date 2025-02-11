// src/App.js
import React from "react";
import MoodTracker from "./components/MoodTracker";
import StepTracker from "./components/StepTracker";
import WaterTracker from "./components/WaterTracker";

function App() {
  return (
    <div>
      <h1>Health Dashboard</h1>
      <MoodTracker />
      <StepTracker />
      <WaterTracker />
    </div>
  );
}

export default App;
