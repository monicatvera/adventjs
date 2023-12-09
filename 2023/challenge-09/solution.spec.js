import { adjustLights } from "./solution";

describe("Challenge #9: 🚦 Switch the lights", () => {
  const testCases = [
    createTestCase(
      [["🟢", "🔴", "🟢", "🟢", "🟢"]],
      1,
      "should return 1 (change the fourth light to 🔴)"
    ),
    createTestCase(
      [["🔴", "🔴", "🟢", "🟢", "🔴"]],
      2,
      "should return 2 (change the second light to 🟢 and the third to 🔴)"
    ),
    createTestCase(
      [["🟢", "🔴", "🟢", "🔴", "🟢"]],
      0,
      "should return 0 (they are already alternating)"
    ),
    createTestCase(
      [["🔴", "🔴", "🔴"]],
      1,
      "should return 1 (change the second light to 🟢)"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(adjustLights(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
