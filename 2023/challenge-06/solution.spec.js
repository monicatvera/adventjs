import { maxDistance } from "./solution";

describe("Challenge #6: 🦌 The reindeer on trial", () => {
  const testCases = [
    createTestCase(
      [">>*<<"],
      4,
      "should return the maximum distance traveled for mixed movements"
    ),
    createTestCase(
      ["<<>>"],
      2,
      "should return the maximum distance traveled for left and right movements"
    ),
    createTestCase(
      [">***>"],
      5,
      "should return the maximum distance traveled for mixed movements with wildcard"
    ),
    createTestCase(
      ["<>*<"],
      3,
      "should return the maximum distance traveled for mixed movements with wildcard"
    ),
    createTestCase(
      ["*"],
      1,
      "should return the maximum distance traveled for a single wildcard movement"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(maxDistance(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
