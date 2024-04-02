import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

interface QuestionProps {
  question: string;
  answers: string[];
  questionIndex: number;
  numberofQuestions: number;
  savedAnswerIndex?: string;
  onPrevious: () => void;
  onSubmit: (selectedAnswer: string) => void;
}

const Question = (props: QuestionProps) => {
  const {
    answers,
    question,
    questionIndex,
    numberofQuestions,
    savedAnswerIndex,
    onPrevious,
    onSubmit,
  } = props;

  const [selectedAnswer, setSelectedAnswer] = useState("-1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    setSelectedAnswer(savedAnswerIndex || "-1");
  }, [savedAnswerIndex, questionIndex]);
  return (
    <>
      <Typography>{question}</Typography>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={selectedAnswer}
        onChange={handleChange}
      >
        {answers.map((answer, index) => (
          <FormControlLabel
            value={index}
            control={<Radio />}
            label={answer}
            key={`${answer}-${index}`}
          />
        ))}
      </RadioGroup>
      <div>
        {questionIndex !== 0 && <Button onClick={onPrevious}>Previous</Button>}
        <Button
          disabled={Number(selectedAnswer) === -1}
          onClick={() => onSubmit(selectedAnswer)}
        >
          {questionIndex < numberofQuestions - 1 ? "Next" : "Submit"}
        </Button>
      </div>
    </>
  );
};

export default Question;
