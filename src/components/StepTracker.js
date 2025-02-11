import React, { useState } from "react";
import "./StepTracker.css";

const StepTracker = () => {
  const [steps, setSteps] = useState("");
  const targetSteps = 5000;
  const maxSteps = 25000; // Maximum steps allowed

  // Handle step input with range validation (0 to 25000) and no decimal values
  const handleStepChange = (e) => {
    let value = e.target.value;

    // Remove anything that is not a digit
    value = value.replace(/[^\d]/g, "");

    // If value is within range, update the state
    if (value === "" || (value >= 0 && value <= maxSteps)) {
      setSteps(value);
    }
  };

  return (
    <div className="step-tracker">
      <h2>Step Tracker</h2>
      <input
        type="text" // Changed to text to prevent decimal input
        placeholder="Enter your steps"
        value={steps}
        onChange={handleStepChange}
        maxLength={5} // Limits input length (since 25000 is the max)
      />
      <p>
        {steps
          ? steps >= targetSteps
            ? "🎉 Great job! You reached your goal!"
            : "💪 Keep going! You're almost there!"
          : "Enter your steps to track progress!"}
      </p>

      {/* Exercise Suggestion */}
      {steps && (
        <div className="exercise-section">
          <h3>{steps < targetSteps ? "Try These Exercises:" : "Relaxing Exercises:"}</h3>
          <ul>
            {steps < targetSteps ? (
              <>
                <li>
                  🏋️‍♀️ Squats - 3 sets of 15
                  <br />
                  <iframe
                    width="100%"
                    height="150"
                    src="https://www.youtube.com/embed/aclHkVaku9U"
                    title="Squats Exercise"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </li>
                <li>
                  🦵 Lunges - 2 sets of 10
                  <br />
                  <iframe
                    width="100%"
                    height="150"
                    src="https://www.youtube.com/embed/QOVaHwm-Q6U"
                    title="Lunges Exercise"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </li>
                <li>
                  🏃‍♂️ Jumping Jacks - 30 seconds
                  <br />
                  <iframe
                    width="100%"
                    height="150"
                    src="https://www.youtube.com/embed/c4DAnQ6DtF8"
                    title="Jumping Jacks Exercise"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </li>
              </>
            ) : (
              <>
                <li>
                  🧘‍♂️ Yoga Stretch - 10 min
                  <br />
                  <iframe
                    width="100%"
                    height="150"
                    src="https://www.youtube.com/embed/VaoV1PrYft4"
                    title="Yoga Stretch"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </li>
                <li>
                  ☁️ Deep Breathing - 5 min
                  <br />
                  <iframe
                    width="100%"
                    height="150"
                    src="https://www.youtube.com/embed/SEfs5TJZ6Nk"
                    title="Deep Breathing"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </li>
                <li>
                  🎵 Light Walk - 15 min
                  <br />
                  <iframe
                    width="100%"
                    height="150"
                    src="https://www.youtube.com/embed/WoWQGqHWi_c"
                    title="Light Walk"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StepTracker;
