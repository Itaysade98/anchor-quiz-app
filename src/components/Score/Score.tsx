import React from "react";
import { Question } from "../../types";
import { Typography } from "@mui/material";
import { calculateUserScore } from "../../utils/calculations";

interface ScoreProps {
  questions: Question[];
  userAnswers: Record<number, string>;
}

const Score = (props: ScoreProps) => {
  const { questions, userAnswers } = props;

  const scorePercentage = calculateUserScore(questions, userAnswers);

  return (
    <>
      <Typography>
        Thank you for participating in my quiz! You scored: 
      </Typography>
      <Typography>{`${scorePercentage}/100`}</Typography>
    </>
  );
};

export default Score;
