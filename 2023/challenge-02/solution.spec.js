import { manufacture } from "./solution";

describe("Challenge #2: 🏭 Factory in Action!", () => {
  const testCases = [
    createTestCase(
      [["tren", "oso", "pelota"], "tronesa"],
      ["tren", "oso"],
      "should return gifts that can be manufactured"
    ),
    createTestCase(
      [["juego", "puzzle"], "jlepuz"],
      ["puzzle"],
      "should return gifts that can be manufactured"
    ),
    createTestCase(
      [["libro", "ps5"], "psli"],
      [],
      "should return an empty array when no gifts can be manufactured"
    ),
    createTestCase(
      [["calcetin", "sueter", "gorro"], "saetr"],
      ["calcetin", "sueter", "gorro"],
      "should return all gifts when all can be manufactured"
    ),
    createTestCase(
      [[], "abc"],
      [],
      "should return an empty array when no gifts are given"
    ),
    createTestCase(
      [["robot", "laptop", "helicoptero"], "abc"],
      [],
      "should return an empty array when no gifts can be manufactured"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(manufacture(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
