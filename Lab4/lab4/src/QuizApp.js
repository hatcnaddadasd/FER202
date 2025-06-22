import React, { useState } from "react";

const defaultQuizData = [
  {
    question: "What is ReactJS?",
    answers: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "What is JSX?",
    answers: [
      "A programming language",
      "A file format",
      "A syntax extension for JavaScript",
    ],
    correctAnswer: "A syntax extension for JavaScript",
  },
   {
    question: "Which university is known as the top technology university in Vietnam?",
    answers: ["FTU", "NEU", "HUST", "FPT"],
    correctAnswer: "FPT",
  }
];

function Quiz() {
  const [quizData] = useState(defaultQuizData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    const correct = quizData[currentQuestion].correctAnswer === answer;
    if (correct) {
      setScore((prev) => prev + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Incorrect!`);
    }
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setFeedback("");
      setShowAnswer(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setIsQuizCompleted(false);
    setFeedback("");
    setShowAnswer(false);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          {isQuizCompleted ? (
            <div className="text-center">
              <h2 className="text-danger">🎉 Quiz Completed!</h2>
              <p className="fs-4">Your score: <strong>{score}</strong> / {quizData.length}</p>
              <button className="btn btn-primary" onClick={resetQuiz}>
                🔁 Restart Quiz
              </button>
            </div>
          ) : (
            <div>
              <h4 className="mb-3 text-primary">Question {currentQuestion + 1}</h4>
              <p className="fs-5">{quizData[currentQuestion].question}</p>
              <div className="list-group">
                {quizData[currentQuestion].answers.map((answer, index) => (
                  <label key={index} className={`list-group-item ${selectedAnswer === answer ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="answer"
                      value={answer}
                      checked={selectedAnswer === answer}
                      onChange={() => handleAnswerSelect(answer)}
                      disabled={selectedAnswer !== ""}
                      className="form-check-input me-2"
                    />
                    {answer}
                  </label>
                ))}
              </div>

              {feedback && (
                <div className={`alert mt-3 ${feedback.includes("Correct") ? "alert-success" : "alert-danger"}`}>
                  {feedback}
                  {showAnswer && !feedback.includes("Correct") && (
                    <div className="mt-2">
                      👉 Correct Answer: <strong>{quizData[currentQuestion].correctAnswer}</strong>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4">
                {selectedAnswer && (
                  <button className="btn btn-success me-2" onClick={handleNext}>
                    Next
                  </button>
                )}
                {!selectedAnswer && !showAnswer && (
                  <button className="btn btn-outline-info" onClick={() => {
                    setFeedback("📌 Correct Answer: " + quizData[currentQuestion].correctAnswer);
                    setShowAnswer(true);
                  }}>
                    Show Answer
                  </button>
                )}
                <button className="btn btn-outline-secondary ms-2" onClick={resetQuiz}>
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
