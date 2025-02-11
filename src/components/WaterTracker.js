import React, { useState } from "react";
import "./WaterTracker.css";

function WaterTracker() {
  const [water, setWater] = useState("");
  const targetWater = 8; // Target: 8 glasses
  const minWater = 1; // Minimum: 1 glass
  const maxWater = 20; // Maximum: 20 glasses

  const handleInputChange = (e) => {
    let value = e.target.value;
    // Only update if the value is between 1 and 20
    if (value === "" || (value >= minWater && value <= maxWater)) {
      setWater(value);
    }
  };

  const getFeedback = () => {
    const waterNum = parseInt(water, 10);
    if (isNaN(waterNum)) return "Please enter a valid number.";

    if (waterNum >= targetWater) {
      return "🥳 Hydration Hero! You did it! Cue the applause and sitcom laugh track! 😂👏";
    } else {
      return "💧 Don't forget to drink water! Imagine a cute anime character handing you a glass! 🥤✨";
    }
  };

  return (
    <div className="tracker-container">
      <input
        type="number"
        placeholder="Enter glasses of water..."
        value={water}
        onChange={handleInputChange}
        min={minWater}
        max={maxWater}
      />
      <p>{water && getFeedback()}</p>
    </div>
  );
}

export default WaterTracker;
