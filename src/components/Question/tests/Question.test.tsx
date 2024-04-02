import { render } from "@testing-library/react";
import { vi } from "vitest";
import Question from "../Question";
import { act } from "react-dom/test-utils";

describe("Question component tests", () => {
  it("previous button should not show on first question", () => {
    const { queryByTestId } = render(
      <Question
        answers={[]}
        numberofQuestions={5}
        onPrevious={() => {}}
        onSubmit={() => {}}
        question=""
        questionIndex={0}
      />
    );
    const button = queryByTestId("previous-question-button");
    expect(button).not.toBeInTheDocument();
  });
  it("next/submit button should be disabled before answering", () => {
    const { getByTestId } = render(
      <Question
        answers={[]}
        numberofQuestions={5}
        onPrevious={() => {}}
        onSubmit={() => {}}
        question=""
        questionIndex={0}
      />
    );
    const button = getByTestId("submit-question-button");
    expect(button).toBeDisabled();
  });
  it("next/submit button should be enabled after answering", () => {
    const { getByTestId } = render(
      <Question
        answers={["a", "b", "c", "d"]}
        numberofQuestions={5}
        onPrevious={() => {}}
        onSubmit={() => {}}
        question=""
        questionIndex={0}
      />
    );

    const answerA = getByTestId("answer-0");
    act(() => {
      answerA.click();
    });
    const button = getByTestId("submit-question-button");
    expect(button).not.toBeDisabled();
  });
  it("previous button should call previous function", () => {
    const onPrevious = vi.fn();

    const { getByTestId } = render(
      <Question
        answers={["a", "b", "c", "d"]}
        numberofQuestions={5}
        onPrevious={onPrevious}
        onSubmit={() => {}}
        question=""
        questionIndex={1}
      />
    );

    const button = getByTestId("previous-question-button");
    act(() => {
        button.click();
    })
    expect(onPrevious).toHaveBeenCalledOnce();
  });
  it("next/submit button should call onSubmit function with selected answer", () => {
    const onSubmitSpy = vi.fn();

    const { getByTestId } = render(
      <Question
        answers={["a", "b", "c", "d"]}
        numberofQuestions={5}
        onPrevious={() => {}}
        onSubmit={onSubmitSpy}
        question=""
        questionIndex={0}
      />
    );

    const answerA = getByTestId("answer-0");
    act(() => {
      answerA.click();
    });
    const button = getByTestId("submit-question-button");
    act(() => {
        button.click();
    })
    expect(onSubmitSpy).toHaveBeenCalledOnce();
    expect(onSubmitSpy).toHaveBeenCalledWith('0');
  });
  it("next/submit button text should be submit on final question", () => {
    const { getByTestId } = render(
      <Question
        answers={["a", "b", "c", "d"]}
        numberofQuestions={5}
        onPrevious={() => {}}
        onSubmit={() => {}}
        question=""
        questionIndex={5}
      />
    );

    const button = getByTestId("submit-question-button");

    expect(button.innerHTML).toBe('Submit');
  });
});
