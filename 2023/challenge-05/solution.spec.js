import { cyberReindeer } from "./solution";

describe("Challenge #5: 🛷 Santa's CyberTruck", () => {
  const testCases = [
    createTestCase(
      ["S..|...|..", 10],
      [
        "S..|...|..",
        ".S.|...|..",
        "..S|...|..",
        "..S|...|..",
        "..S|...|..",
        "...S...*..",
        "...*S..*..",
        "...*.S.*..",
        "...*..S*..",
        "...*...S..",
      ],
      "should simulate sled's movement for a given time"
    ),
    createTestCase(
      ["|..|", 3],
      ["|..|", "*..|", ".*.|"],
      "should simulate sled's movement for a given time with closed barriers"
    ),
    createTestCase(
      ["S..|...|..", 1],
      ["S..|...|.."],
      "should return the initial state when time is 1"
    ),
    createTestCase(
      ["....|....", 7],
      [
        "....|....",
        "....|....",
        "....|....",
        "....|....",
        "....|....",
        "....|....",
        "....|....",
      ],
      "should simulate sled's movement for a given time with no barriers"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(cyberReindeer(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
