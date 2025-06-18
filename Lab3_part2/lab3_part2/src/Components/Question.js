import React from 'react';

const Question = ({ question, questionNumber, onAnswer }) => {
  return (
    <div>
      <h3>Question {questionNumber}</h3>
      <p>{question.question}</p>
      <ul className="list-group">
        {question.options.map((option, index) => (
          <li key={index} className="list-group-item">
            <button className="btn btn-link" onClick={() => onAnswer(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
