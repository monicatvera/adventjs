import { createChristmasTree } from "./solution";

describe("Challenge #10: 🎄 Create your own Christmas tree", () => {
  const testCases = [
    createTestCase(
      [["123", 4]],
      "   1\n  2 3\n 1 2 3\n1 2 3 1 2\n   |\n",
      "should create a Christmas tree with numbers"
    ),
    createTestCase(
      [["*@o", 3]],
      "  *\n @ o\n* @ o\n   |\n",
      "should create a Christmas tree with symbols"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(createChristmasTree(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
