import { calculateTime } from "./solution";

describe("Challenge #13: ⌚️ Calculating the time", () => {
  const testCases = [
    createTestCase(
      [["00:10:00", "01:00:00", "03:30:00"], "-02:20:00"],
      "should return the correct time for a set of deliveries"
    ),
    createTestCase(
      [["02:00:00", "05:00:00", "00:30:00"], "00:30:00"],
      "should return the correct time for another set of deliveries"
    ),
    createTestCase(
      [["00:45:00", "00:45:00", "00:00:30", "00:00:30"], "-05:29:00"],
      "should return the correct time for a different set of deliveries"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(calculateTime(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
