import { useRef, useState } from "react";
import { questions } from "./data/quizQuestions";
import Question from "./components/Question/Question";
import "./Quiz.css";
import Score from "./components/Score/Score";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const userAnswers = useRef<Record<number, string>>({});

  const onQuestionSubmit = (selectedAnswer: string) => {
    userAnswers.current[currentQuestionIndex] = selectedAnswer;
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const onPreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <Question
          answers={questions[currentQuestionIndex].answers}
          numberofQuestions={questions.length}
          onPrevious={onPreviousClick}
          onSubmit={onQuestionSubmit}
          question={questions[currentQuestionIndex].question}
          questionIndex={currentQuestionIndex}
          savedAnswerIndex={userAnswers.current[currentQuestionIndex]}
        />
      ) : (
        <Score questions={questions} userAnswers={userAnswers.current} />
      )}
    </div>
  );
}

export default Quiz;
