const { solve } = require('./solution');

test('Test challenge #', () => {
  expect(
    solve([
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E'],
    ]),
  ).toBe(true);

  expect(
    solve([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E'],
    ]),
  ).toBe(false);

  expect(
    solve([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', ' ', 'W'],
      [' ', ' ', ' ', ' ', 'E'],
    ]),
  ).toBe(false);

  expect(solve([['E', ' ', ' ', ' ', 'S']])).toBe(true);

  expect(solve([['E', ' ', 'W', ' ', 'S']])).toBe(false);

  expect(solve([['E', ' ', 'W', ' ', 'S']])).toBe(false);

  expect(
    solve([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ]),
  ).toBe(true);

  expect(
    solve([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', 'W', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ]),
  ).toBe(false);

  expect(
    solve([
      ['E', 'S', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
    ]),
  ).toBe(true);
});
