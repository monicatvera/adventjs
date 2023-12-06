import { findNaughtyStep } from "./solution";

describe("Challenge #3: 😏 The Naughty Elf", () => {
  const testCases = [
    createTestCase(
      ["abcd", "abcde"],
      "e",
      "should return the first extra step added"
    ),
    createTestCase(
      ["stepfor", "stepor"],
      "f",
      "should return the first extra step added"
    ),
    createTestCase(
      ["abcde", "abcde"],
      "",
      "should return an empty string when sequences are identical"
    ),
    createTestCase(
      ["", "a"],
      "a",
      "should return the first extra step added when the original sequence is empty"
    ),
    createTestCase(
      ["a", ""],
      "a",
      "should return the first extra step added when the modified sequence is empty"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(findNaughtyStep(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
