import { act, render } from "@testing-library/react";
import Quiz from "../Quiz";
import { mockQuestions } from "./mockData";

describe("Quiz component tests", () => {
  it("should show questions and not score if not all questions have been answered", () => {
    const { queryByTestId } = render(<Quiz questions={mockQuestions} />);

    const question = queryByTestId("question-0");
    const score = queryByTestId("score-percentage");

    expect(question).toBeInTheDocument();
    expect(score).not.toBeInTheDocument();
  });
  it("should show score and not question if all questions have been answered", () => {
    const { queryByTestId, getByTestId } = render(
      <Quiz questions={mockQuestions} />
    );

    const answerA = getByTestId("answer-0");
    act(() => {
      answerA.click();
    });
    const button = getByTestId("submit-question-button");
    act(() => {
      button.click();
    });

    const question = queryByTestId("question-0");
    const score = queryByTestId("score-percentage");

    expect(question).not.toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });
});
