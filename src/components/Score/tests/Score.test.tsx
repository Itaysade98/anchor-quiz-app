import { render } from "@testing-library/react";
import { vi } from "vitest";
import Score from "../Score";

vi.mock("../../utils/calculations.ts", () => {
    const mockFn = vi.fn();
    mockFn.mockResolvedValue(0);
  return { calculateUserScore: mockFn };
});

describe("Score component tests", () => {
  it("should show the calculated score", () => {
    const {getByTestId} = render(<Score questions={[]} userAnswers={{}}/>)

    const score = getByTestId('score-percentage');

    expect(score.innerHTML).toBe('0/100');
  });
});
