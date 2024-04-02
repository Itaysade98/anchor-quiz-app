import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./components/Quiz/Quiz.tsx";
import { questions } from "./data/quizQuestions.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Quiz questions={questions} />
  </React.StrictMode>
);
