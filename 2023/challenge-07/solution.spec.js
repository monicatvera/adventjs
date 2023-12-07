import { drawGift } from "./solution";

describe("Challenge #7: 📦 The 3D boxes", () => {
  const testCases = [
    createTestCase(
      [4, "+"],
      `
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`,
      "should draw a 3D gift with '+' symbol"
    ),
    createTestCase(
      [5, "*"],
      `
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`,
      "should draw a 3D gift with '*' symbol"
    ),
    createTestCase(
      [1, "^"],
      `
#
`,
      "should draw a 3D gift with '^' symbol for size 1"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(drawGift(...input)).toEqual(expected.trim());
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
