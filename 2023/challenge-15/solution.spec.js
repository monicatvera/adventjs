import { autonomousDrive } from "./solution";

describe("Challenge #15: ↔️ Autonomous robot", () => {
  const testCases = [
    createTestCase(
      [
        ["..!....", "...*.*."],
        ["R", "R", "D", "L"],
      ],
      [".......", "...*!*."],
      "should return the correct final position of the robot"
    ),
  ];

  it.each(testCases)(
    "#$# $description",
    ({ input: [store, movements], expected, description }) => {
      expect(autonomousDrive(store, movements)).toEqual(expected);
    }
  );
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
