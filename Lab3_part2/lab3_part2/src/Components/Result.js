import React from 'react';

const Result = ({ score, total, userAnswers, showAnswers, onRestart, onShowAnswers }) => {
  return (
    <div>
      <h2>Quiz Ended</h2>
      <p>Your Score: {score} / {total}</p>
      <button className="btn btn-primary me-2" onClick={onRestart}>Play Again</button>
      {!showAnswers && (
        <button className="btn btn-secondary" onClick={onShowAnswers}>Show Answers</button>
      )}

      {showAnswers && (
        <div className="mt-4">
          <h4>Answers:</h4>
          <ul className="list-group">
            {userAnswers.map((item, index) => (
              <li key={index} className="list-group-item">
                <strong>Q{index + 1}:</strong> {item.question} <br />
                <strong>Your answer:</strong> {item.selected} <br />
                <strong>Correct answer:</strong> {item.correct}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Result;
