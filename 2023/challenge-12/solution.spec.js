import { checkIsValidCopy } from "./solution";

describe("Challenge #12: 📸 Is it a valid copy?", () => {
  const testCases = [
    createTestCase(
      ["Santa Claus is coming", "sa#ta cl#us is comin#"],
      true,
      "should return true for a valid copy"
    ),
    createTestCase(
      ["Santa Claus is coming", "p#nt: cla#s #s c+min#"],
      false,
      "should return false for an invalid copy"
    ),
    createTestCase(
      ["Santa Claus", "s#+:. c:. s"],
      true,
      "should return true for a valid copy"
    ),
    createTestCase(
      ["Santa Claus", "s#+:.#c:. s"],
      false,
      "should return false for an invalid copy"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(checkIsValidCopy(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
