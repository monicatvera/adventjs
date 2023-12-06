function findFirstRepeated(gifts) {
  const seen = new Set();

  return gifts.find((gift) => seen.has(gift) || !seen.add(gift)) || -1;
}
