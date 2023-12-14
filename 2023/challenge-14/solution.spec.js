import { maxGifts } from "./solution";

describe("Challenge #14: 🚨 Avoid the alarm", () => {
  const testCases = [
    createTestCase(
      [[2, 4, 2], 4],
      "should return the correct maximum number of gifts for a set of houses"
    ),
    createTestCase(
      [[5, 1, 1, 5], 10],
      "should return the correct maximum number of gifts for another set of houses"
    ),
    createTestCase(
      [[4, 1, 1, 4, 2, 1], 9],
      "should return the correct maximum number of gifts for a different set of houses"
    ),
    createTestCase(
      [[1, 3, 1, 3, 100], 103],
      "should return the correct maximum number of gifts for yet another set of houses"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(maxGifts(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
