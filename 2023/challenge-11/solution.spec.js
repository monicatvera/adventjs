import { getIndexsForPalindrome } from "./solution";

describe("Challenge #11: 📖 The Studious Elves", () => {
  const testCases = [
    createTestCase(
      ["anna"],
      [],
      "should return an empty array for an input that is already a palindrome"
    ),
    createTestCase(
      ["abab"],
      [0, 1],
      "should return the indices for a single swap palindrome"
    ),
    createTestCase(
      ["abac"],
      null,
      "should return null for an input where no palindrome can be formed"
    ),
    createTestCase(
      ["aaaaaaaa"],
      [],
      "should return an empty array for a string of the same characters"
    ),
    createTestCase(
      ["aaababa"],
      [1, 3],
      "should return the indices for a single swap palindrome"
    ),
    createTestCase(
      ["caababa"],
      null,
      "should return null for an input where no palindrome can be formed"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(getIndexsForPalindrome(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
