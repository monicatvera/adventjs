import {solve} from './solution'

test('Test challenge #', () => {
  expect(
    solve([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 },
    ]),
  ).toBe(`+++++++++++++++++++
          | Gift | Quantity |
          | ---- | -------- |
          | Game | 2        |
          | Bike | 1        |
          | Book | 7        |
          *******************`);

  expect(
    solve([
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 },
    ]),
  ).toBe(`++++++++++++++++++++++++++++++++++++++
          | Gift               | Quantity      |
          | ------------------ | ------------- |
          | PlayStation 5      | 9234782374892 |
          | Book Learn Web Dev | 23531         |
          **************************************`);

  expect(solve([{ name: 'Game', quantity: 10000 }])).toBe(
    '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************',
  );

  expect(solve([{ name: 'Game', quantity: 1234567890 }])).toBe(
    '+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************',
  );

  expect(
    solve([
      { name: 'Toy', quantity: 12 },
      { name: 'Mic', quantity: 123 },
    ]),
  ).toBe(
    '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************',
  );
});
