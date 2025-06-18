import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of VietNam?",
          options: ["Tokyo", "HaLoi", "Ho Chi Minh", "Hue"],
          answer: "HaLoi"
        },
        {
          id: 2,
          question: "Which university is known as the top technology university in Vietnam?",
          options: ["FTU", "NEU", "HUST", "FPT"],
          answer: "FPT"
        }
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      userAnswers: [],
      showAnswers: false
    };
  }

  handleAnswer = (selectedOption) => {
    const { currentQuestion, questions, score, userAnswers } = this.state;
    const correctAnswer = questions[currentQuestion].answer;
    const isCorrect = selectedOption === correctAnswer;

    this.setState({
      score: isCorrect ? score + 1 : score,
      userAnswers: [
        ...userAnswers,
        {
          question: questions[currentQuestion].question,
          selected: selectedOption,
          correct: correctAnswer
        }
      ]
    }, () => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        this.setState({ currentQuestion: nextQuestion });
      } else {
        this.setState({ quizEnd: true });
      }
    });
  };

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      userAnswers: [],
      showAnswers: false
    });
  };

  handleShowAnswers = () => {
    this.setState({ showAnswers: true });
  }

  render() {
    const { questions, currentQuestion, score, quizEnd, userAnswers, showAnswers } = this.state;

    return (
      <div className="container mt-5">
        {quizEnd ? (
          <Result
            score={score}
            total={questions.length}
            userAnswers={userAnswers}
            showAnswers={showAnswers}
            onRestart={this.restartQuiz}
            onShowAnswers={this.handleShowAnswers}
          />
        ) : (
          <Question
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            onAnswer={this.handleAnswer}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;
