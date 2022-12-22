const solve = (gifts) => {
  const MaxGiftName = Math.max(
    ...gifts.map((gift) => gift.name.length),
    4,
  );
  const MaxGiftQuantity = Math.max(
    ...gifts.map((gift) => `${gift.quantity}`.length),
    8,
  );

  const MakeBlockBorder = (symbol) =>
    symbol.repeat(MaxGiftName + MaxGiftQuantity + 7);

  const topBorder = MakeBlockBorder('+');
  const bottomBorder = MakeBlockBorder('*');

  const boxHeader =
    '| ' +
    'Gift'.padEnd(MaxGiftName, ' ') +
    ' | ' +
    'Quantity'.padEnd(MaxGiftQuantity, ' ') +
    ' |';

  const boxSeparator =
    '| ' +
    '-'.repeat(MaxGiftName) +
    ' | ' +
    '-'.repeat(MaxGiftQuantity) +
    ' |';

  const boxContent = gifts.map(
    (gift) =>
      '| ' +
      `${gift.name}`.padEnd(MaxGiftName, ' ') +
      ' | ' +
      `${gift.quantity}`.padEnd(MaxGiftQuantity, ' ') +
      ' |',
  );

  return [
    topBorder,
    boxHeader,
    boxSeparator,
    ...boxContent,
    bottomBorder,
  ].join('\n');
};

module.exports = { solve };
