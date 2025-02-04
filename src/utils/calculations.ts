import { IQuestion } from "../types";

export const calculateUserScore = (
  questions: IQuestion[],
  userAnswers: Record<number, string>
) => {
  return Object.entries(userAnswers).reduce<number>(
    (percentage, [questionIndex, SelectAnswerIndex]) => {
      const currentQuestionCorrectAnswerIndex =
        questions[Number(questionIndex)].correctAnswerIndex;
      if (currentQuestionCorrectAnswerIndex === Number(SelectAnswerIndex)) {
        return percentage + 100 / questions.length;
      }
      return percentage;
    },
    0
  );
};
