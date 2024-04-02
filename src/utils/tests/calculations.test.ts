import { describe, expect } from "vitest";
import { calculateUserScore } from "../calculations";
import { mockQuestions, mockUserAnswers } from "./mockData";

describe('calculation utils tests', () => {
    it('should give the percise percentage of correct answers', () => {
        const result = calculateUserScore(mockQuestions, mockUserAnswers);
        expect(result).toEqual(40);
    })
})