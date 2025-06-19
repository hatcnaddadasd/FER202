import React, { useEffect, useReducer, useState } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// Initial state
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  answerChecked: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload, answerChecked: true };

    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const isLast = state.currentQuestion + 1 === state.questions.length;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        answerChecked: false,
        showScore: isLast,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    answerChecked,
  } = state;

  const [timer, setTimer] = useState(10);
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("highScore")) || 0
  );

  // Countdown timer
  useEffect(() => {
    if (showScore) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNext(); // auto move if time's up
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentQuestion, showScore]);

  // Save high score
  useEffect(() => {
    if (showScore && score > highScore) {
      localStorage.setItem("highScore", score);
      setHighScore(score);
    }
  }, [showScore, score, highScore]);

  const handleOptionSelect = (option) => {
    if (!answerChecked) {
      dispatch({ type: "SELECT_OPTION", payload: option });
    }
  };

  const handleNext = () => {
    dispatch({ type: "NEXT_QUESTION" });
    setTimer(10); // reset timer
  };

  const handleRestart = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimer(10);
  };

  const current = questions[currentQuestion];

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              🎉 Your Score: {score} / {questions.length}
            </h2>
            <h5>🏆 High Score: {highScore}</h5>
            <Button variant="primary" onClick={handleRestart}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between">
              <div>
                <strong>
                  Question {currentQuestion + 1} / {questions.length}
                </strong>
              </div>
              <div>
                Time Left:{" "}
                <span style={{ color: timer <= 5 ? "red" : "black" }}>
                  {timer}s
                </span>
              </div>
            </div>

            <h4 className="mt-3">{current.question}</h4>
            <div className="mt-3">
              {current.options.map((option, index) => (
                <Button
                  key={index}
                  className="m-2"
                  variant={
                    answerChecked
                      ? option === current.answer
                        ? "success"
                        : option === selectedOption
                        ? "danger"
                        : "outline-secondary"
                      : selectedOption === option
                      ? "info"
                      : "outline-secondary"
                  }
                  onClick={() => handleOptionSelect(option)}
                  disabled={answerChecked}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Feedback */}
            {answerChecked && (
              <div className="mt-3">
                {selectedOption === current.answer ? (
                  <div className="text-success">
                    <FaCheckCircle /> Correct! 🎉
                  </div>
                ) : (
                  <div className="text-danger">
                    <FaTimesCircle /> Incorrect! The correct answer is:{" "}
                    <strong>{current.answer}</strong>
                  </div>
                )}
              </div>
            )}

            <div className="text-end">
              <Button
                variant="primary"
                className="mt-3"
                disabled={!answerChecked}
                onClick={handleNext}
              >
                {currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </Button>
            </div>
          </>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
