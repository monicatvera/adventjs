import { organizeGifts } from "./solution";

describe("Challenge #8: 🏬 Sorting the warehouse", () => {
  const testCases = [
    createTestCase(
      ["76a11b"],
      "[a][a][a][a][a][a][a]{a}{a}(aaaaaa){b}(b)",
      "should organize gifts as specified in the prompt"
    ),
    createTestCase(
      ["30a15b10c"],
      "[a][a][a][a][a]{a}{a}{a}{a}{a}(aaaaa)[b][b][b][b][b]{b}{b}{b}{b}{b}(bbbbb)[c][c][c][c][c](ccccc)",
      "should organize gifts as specified in the prompt"
    ),
    createTestCase(
      ["5a5b5c5d5e5f5g5h5i5j5k5l5m5n5o5p5q5r5s5t5u5v5w5x5y5z"],
      "[a][a][a][a][a]{a}[b][b][b][b][b]{b}[c][c][c][c][c]{c}[d][d][d][d][d]{d}[e][e][e][e][e]{e}[f][f][f][f][f]{f}[g][g][g][g][g]{g}[h][h][h][h][h]{h}[i][i][i][i][i]{i}[j][j][j][j][j]{j}[k][k][k][k][k]{k}[l][l][l][l][l]{l}[m][m][m][m][m]{m}[n][n][n][n][n]{n}[o][o][o][o][o]{o}[p][p][p][p][p]{p}[q][q][q][q][q]{q}[r][r][r][r][r]{r}[s][s][s][s][s]{s}[t][t][t][t][t]{t}[u][u][u][u][u]{u}[v][v][v][v][v]{v}[w][w][w][w][w]{w}[x][x][x][x][x]{x}[y][y][y][y][y]{y}[z][z][z][z][z](zzzzz)",
      "should organize gifts as specified in the prompt"
    ),
  ];

  it.each(testCases)("#$# $description", ({ input, expected, description }) => {
    expect(organizeGifts(...input)).toEqual(expected);
  });
});

function createTestCase(input, expected, description) {
  return { input, expected, description };
}
