import { decode } from "./solution";

describe("Challenge #4: 😵‍💫 Reverse the Parentheses", () => {
  const testCases = [
    createTestCase(
      ["hola (odnum)"],
      "hola mundo",
      "should reverse characters inside parentheses"
    ),
    createTestCase(
      ["(olleh) (dlrow)!"],
      "hello world!",
      "should reverse characters inside parentheses, multiple occurrences"
    ),
    createTestCase(
      ["sa(u(cla)atn)s"],
      "santaclaus",
      "should handle nested parentheses"
    ),
    createTestCase(
      [""],
      "",
      "should return an empty string when the input is an empty string"
    ),
    createTestCase(
      ["abcde (12345)"],
      "edcba 54321",
      "should reverse characters inside parentheses, alphanumeric content"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(decode(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
