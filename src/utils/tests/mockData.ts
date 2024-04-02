import { IQuestion } from "../../types";

export const mockQuestions: IQuestion[] = [
  {
    question: "What is Itays' favorite meal?",
    answers: ["pizza", "pasta", "hamburger", "salad"],
    correctAnswerIndex: 2,
  },
  {
    question: "Where did Itay study abroad for 5 years?",
    answers: ["USA", "Belgium", "Italy", "Canada"],
    correctAnswerIndex: 1,
  },
  {
    question: "What is Itays' pets name?",
    answers: ["chilly", "snowy", "goldy", "scooter"],
    correctAnswerIndex: 0,
  },
  {
    question: "What was Itays' previous last name?",
    answers: ["Saadia", "Zalmanovich", "Cohen", "Mor"],
    correctAnswerIndex: 0,
  },
  {
    question: "How old is Itay?",
    answers: ["24", "25", "26", "38"],
    correctAnswerIndex: 2,
  },
];

export const mockUserAnswers = {
  0: "0",
  1: "0",
  2: "0",
  3: "0",
  4: "0",
};
