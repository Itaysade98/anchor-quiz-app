import { useRef, useState } from "react";
import Question from "../Question/Question";
import "./Quiz.css";
import Score from "../Score/Score";
import { Paper } from "@mui/material";
import { IQuestion } from "../../types";

interface IQuizProps {
  questions: IQuestion[];
}

const Quiz = (props: IQuizProps) => {
  const { questions } = props;

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
    <Paper>
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
    </Paper>
  );
};

export default Quiz;
