import { optimizeIntervals } from "./solution";

describe("Challenge #17: 🛷 Optimizing the Rental", () => {
  const testCases = [
    createTestCase(
      [
        [5, 8],
        [2, 7],
        [3, 4],
      ],
      [[2, 8]],
      "should merge overlapping intervals"
    ),
    createTestCase(
      [
        [1, 3],
        [8, 10],
        [2, 6],
      ],
      [
        [1, 6],
        [8, 10],
      ],
      "should merge and sort intervals"
    ),
    createTestCase(
      [
        [3, 4],
        [1, 2],
        [5, 6],
      ],
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      "should handle non-sequential intervals"
    ),
    createTestCase(
      [
        [1, 5],
        [2, 3],
        [4, 7],
      ],
      [[1, 7]],
      "should merge and sort intervals with overlaps"
    ),
    createTestCase(
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      "should handle non-overlapping intervals"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(optimizeIntervals(input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
