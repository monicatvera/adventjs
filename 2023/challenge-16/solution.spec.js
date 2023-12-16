import { transformTree } from "./solution";

describe("Challenge #16: ❌ Friday deployment", () => {
  const testCases = [
    createTestCase(
      [[3, 1, 0, 8, 12, null, 1]],
      {
        value: 3,
        left: {
          value: 1,
          left: {
            value: 8,
            left: null,
            right: null,
          },
          right: {
            value: 12,
            left: null,
            right: null,
          },
        },
        right: {
          value: 0,
          left: null,
          right: {
            value: 1,
            left: null,
            right: null,
          },
        },
      },
      "should return the correct tree structure"
    ),
  ];

  it.each(testCases)(
    "#$# $description",
    ({ input: [tree], expected, description }) => {
      expect(transformTree(tree)).toEqual(expected);
    }
  );
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
