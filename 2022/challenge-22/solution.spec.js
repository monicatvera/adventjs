import {solve} from './solution'

test('Test challenge #', () => {
  expect(
    solve(
      ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
      [1, 33, 10, 2, 44, 20],
    ),
  ).toBe(true);

  expect(solve(['tree_1', 'tree_1', 'house'], [2, 1, 10])).toBe(false);

  expect(solve(['tree_1', 'tree_1', 'house'], [1, 2, 10])).toBe(true);

  expect(
    solve(
      [
        'house',
        'house',
        'tree_1',
        'tree_1',
        'house',
        'tree_2',
        'tree_2',
        'tree_3',
      ],
      [5, 2, 1, 2, 3, 4, 5, 6],
    ),
  ).toBe(false);
});