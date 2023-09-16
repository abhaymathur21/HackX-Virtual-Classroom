import React, { useState } from "react";
import NavBar from "./NavBar";
import ProfessorsSection from "./ProfSec";

const questionStyle = {
  padding: "10px",
  borderRadius: "10px",
  border: "2px solid #4682A9",
  backgroundColor: "#F6F4EB",
  margin: "10px", // Add margin between questions
  marginBottom: "20px",
};

const QnA = () => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const handleJoinMeeting = () => {
    // Check if all questions are answered
    if (
      Object.values(answers).some((answer) => answer.trim() === "") ||
      Object.keys(answers).length < 5
    ) {
      // Alert the user if any question is unanswered
      alert("Please answer all questions before joining the meeting.");
    } else {
      // Redirect to the specified URL if all questions are answered
      window.location.href =
        "https://abhaymathur21.pythonanywhere.com/videocall/";
    }
  };

  const handleAnswerChange = (question, answer) => {
    // Update the answers in the state
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: "flex", backgroundColor: "#F6F4EB" }}>
        <ProfessorsSection />
        <div
          style={{
            width: "55%",
            marginLeft: "200px",
          }}
        >
          <div className="questions-container">
            <h1
              style={{
                fontSize: "28px",
                color: "#4682A9",
                fontStyle: "Bold",
                padding: "5px",
                marginLeft: "250px",
                marginBottom: 0,
                marginTop: "-5px",
              }}
            >
              Please answer these!
            </h1>
            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                1. Please briefly describe your current emotions or thoughts as
                you prepare for this class.
              </p>
              <input
                style={{ marginLeft: "20px" }}
                type="text"
                placeholder="Your answer"
                value={answers.q1}
                onChange={(e) => handleAnswerChange("q1", e.target.value)}
              />
            </div>

            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                2. How would you describe your mood before this class?
              </p>
              <div className="options" style={{ padding: "10px" }}>
                <input
                  type="radio"
                  id="Excited"
                  name="q2"
                  value="Excited"
                  checked={answers.q2 === "Excited"}
                  onChange={() => handleAnswerChange("q2", "Excited")}
                />
                <label htmlFor="Excited" style={{ padding: "10px" }}>
                  Excited
                </label>
                <input
                  type="radio"
                  id="Neutral"
                  name="q2"
                  value="Neutral"
                  checked={answers.q2 === "Neutral"}
                  onChange={() => handleAnswerChange("q2", "Neutral")}
                />
                <label htmlFor="Neutral" style={{ padding: "10px" }}>
                  Neutral
                </label>
                <input
                  type="radio"
                  id="Anxious"
                  name="q2"
                  value="Anxious"
                  checked={answers.q2 === "Anxious"}
                  onChange={() => handleAnswerChange("q2", "Anxious")}
                />
                <label htmlFor="Anxious" style={{ padding: "10px" }}>
                  Anxious
                </label>
              </div>
            </div>

            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                3. How do you feel about the upcoming class?
              </p>
              <div className="options" style={{ padding: "10px" }}>
                <input
                  type="radio"
                  id="Eager"
                  name="q3"
                  value="Eager"
                  checked={answers.q3 === "Eager"}
                  onChange={() => handleAnswerChange("q3", "Eager")}
                />
                <label htmlFor="Eager" style={{ padding: "10px" }}>
                  Eager
                </label>
                <input
                  type="radio"
                  id="Indifferent"
                  name="q3"
                  value="Indifferent"
                  checked={answers.q3 === "Indifferent"}
                  onChange={() => handleAnswerChange("q3", "Indifferent")}
                />
                <label htmlFor="Indifferent" style={{ padding: "10px" }}>
                  Indifferent
                </label>
                <input
                  type="radio"
                  id="Stressed"
                  name="q3"
                  value="Stressed"
                  checked={answers.q3 === "Stressed"}
                  onChange={() => handleAnswerChange("q3", "Stressed")}
                />
                <label htmlFor="Stressed" style={{ padding: "10px" }}>
                  Stressed
                </label>
              </div>
            </div>

            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                4. Is there anything specific on your mind that might affect
                your teaching approach today? Please share any concerns or
                excitement you may have.
              </p>
              <input
                style={{ marginLeft: "20px" }}
                type="text"
                placeholder="Your answer"
                value={answers.q4}
                onChange={(e) => handleAnswerChange("q4", e.target.value)}
              />
            </div>

            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                5. On a scale of 1 to 5, with 5 being extremely positive and 1
                being extremely negative, how would you rate your mood right
                now?
              </p>
              <div className="options" style={{ padding: "10px" }}>
                <input
                  type="radio"
                  id="1"
                  name="q5"
                  value="1"
                  checked={answers.q5 === "1"}
                  onChange={() => handleAnswerChange("q5", "1")}
                />
                <label htmlFor="1" style={{ padding: "10px" }}>
                  1
                </label>
                <input
                  type="radio"
                  id="2"
                  name="q5"
                  value="2"
                  checked={answers.q5 === "2"}
                  onChange={() => handleAnswerChange("q5", "2")}
                />
                <label htmlFor="2" style={{ padding: "10px" }}>
                  2
                </label>
                <input
                  type="radio"
                  id="3"
                  name="q5"
                  value="3"
                  checked={answers.q5 === "3"}
                  onChange={() => handleAnswerChange("q5", "3")}
                />
                <label htmlFor="3" style={{ padding: "10px" }}>
                  3
                </label>
                <input
                  type="radio"
                  id="4"
                  name="q5"
                  value="4"
                  checked={answers.q5 === "4"}
                  onChange={() => handleAnswerChange("q5", "4")}
                />
                <label htmlFor="4" style={{ padding: "10px" }}>
                  4
                </label>
                <input
                  type="radio"
                  id="5"
                  name="q5"
                  value="5"
                  checked={answers.q5 === "5"}
                  onChange={() => handleAnswerChange("q5", "5")}
                />
                <label htmlFor="5" style={{ padding: "10px" }}>
                  5
                </label>
              </div>
            </div>
            <button
              className="join-meeting-button"
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#4682A9",
                marginLeft: "350px",
                marginTop: "-5px",
              }}
              onClick={handleJoinMeeting}
            >
              Join Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
