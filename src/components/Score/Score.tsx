import React from "react";
import { IQuestion } from "../../types";
import { Typography } from "@mui/material";
import { calculateUserScore } from "../../utils/calculations";

interface ScoreProps {
  questions: IQuestion[];
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
      <Typography data-testid='score-percentage'>{`${scorePercentage}/100`}</Typography>
    </>
  );
};

export default Score;
