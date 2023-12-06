import { findFirstRepeated } from "./solution";

describe("Challenge #1: 🎁 First Repeated Gift!", () => {
  const testCases = [
    createTestCase(
      [2, 1, 3, 5, 3, 2],
      3,
      "should return the first repeated gift ID with the smallest second occurrence index"
    ),
    createTestCase(
      [1, 2, 3, 4],
      -1,
      "should return -1 when no numbers are repeated"
    ),
    createTestCase(
      [5, 1, 5, 1],
      5,
      "should return the first repeated gift ID when there are repeated numbers"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(findFirstRepeated(input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
