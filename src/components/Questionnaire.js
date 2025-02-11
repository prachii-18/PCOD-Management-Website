import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Questionnaire.css"; // Import styles if needed

function Questionnaire() {
  const navigate = useNavigate(); // Hook for navigation
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "", q4: "", q5: "" });
  const [message, setMessage] = useState(""); // New state for message
  const [showConsultButton, setShowConsultButton] = useState(false); // State to show optional consult button
  const [clickedButtons, setClickedButtons] = useState({}); // Track which buttons are clicked

  const handleAnswer = (question, answer) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
    setClickedButtons((prev) => ({ ...prev, [question]: answer })); // Update clicked button state
  };

  const handleSubmit = () => {
    const yesCount = Object.values(answers).filter((ans) => ans === "yes").length;

    if (yesCount > 3) {
      navigate("/gynac"); // ✅ Redirect to Gynac Consultation if more than 3 "Yes" answers
    } else {
      setMessage("You're doing fine, but if you still want to consult a gynaecologist, you can proceed.");
      setShowConsultButton(true); // Show the option to still consult
    }
  };

  // Function to dynamically add class based on clicked state
  const getButtonClass = (question, answer) => {
    return clickedButtons[question] === answer ? "clicked" : ""; // Add 'clicked' class if button was clicked
  };

  return (
    <div className="questionnaire-container">
      <h2>Health Questionnaire</h2>

      <div className="question">
        <p>1. Have you experienced irregular periods?</p>
        <button
          className={getButtonClass("q1", "yes")}
          onClick={() => handleAnswer("q1", "yes")}
        >
          Yes
        </button>
        <button
          className={getButtonClass("q1", "no")}
          onClick={() => handleAnswer("q1", "no")}
        >
          No
        </button>
      </div>

      <div className="question">
        <p>2. Do you have severe cramps during menstruation?</p>
        <button
          className={getButtonClass("q2", "yes")}
          onClick={() => handleAnswer("q2", "yes")}
        >
          Yes
        </button>
        <button
          className={getButtonClass("q2", "no")}
          onClick={() => handleAnswer("q2", "no")}
        >
          No
        </button>
      </div>

      <div className="question">
        <p>3. Have you noticed unusual discharge or odor?</p>
        <button
          className={getButtonClass("q3", "yes")}
          onClick={() => handleAnswer("q3", "yes")}
        >
          Yes
        </button>
        <button
          className={getButtonClass("q3", "no")}
          onClick={() => handleAnswer("q3", "no")}
        >
          No
        </button>
      </div>

      <div className="question">
        <p>4. Do you experience pelvic pain frequently?</p>
        <button
          className={getButtonClass("q4", "yes")}
          onClick={() => handleAnswer("q4", "yes")}
        >
          Yes
        </button>
        <button
          className={getButtonClass("q4", "no")}
          onClick={() => handleAnswer("q4", "no")}
        >
          No
        </button>
      </div>

      <div className="question">
        <p>5. Have you had unexplained weight gain or loss?</p>
        <button
          className={getButtonClass("q5", "yes")}
          onClick={() => handleAnswer("q5", "yes")}
        >
          Yes
        </button>
        <button
          className={getButtonClass("q5", "no")}
          onClick={() => handleAnswer("q5", "no")}
        >
          No
        </button>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>

      {/* Display message if fewer than 3 "Yes" answers */}
      {message && <p className="info-message">{message}</p>}

      {/* Optional button to still consult a gynaecologist */}
      {showConsultButton && (
        <button className="consult-btn" onClick={() => navigate("/gynac")}>
          Proceed to Gynaec Consultation
        </button>
      )}
    </div>
  );
}

export default Questionnaire;
