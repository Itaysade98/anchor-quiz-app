import { useState } from "react";
import { questions } from "./data/quizQuestions";
import Question from "./components/Question";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Question
          answers={questions[0].answers}
          numberofQuestions={questions.length}
          onPrevious={() => {}}
          onSubmit={() => {}}
          question={questions[0].question}
          questionIndex={0}
        />
      </div>
    </>
  );
}

export default App;
