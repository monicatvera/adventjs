const { solve } = require('./solution');

test('Test challenge #', () => {
  expect(
    solve(['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01']),
  ).toEqual([14, 10, 0, 0, 0, 0, 0, 0]);

  expect(solve(['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01'])).toEqual([
    0, 254, 0, 0, 0, 0, 0, 0,
  ]);
});