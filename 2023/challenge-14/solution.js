function maxGifts(houses) {
  const n = houses.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return houses[0];
  }
  const maxGiftsAtHouse = new Array(n);
  maxGiftsAtHouse[0] = houses[0];
  maxGiftsAtHouse[1] = Math.max(houses[0], houses[1]);
  for (let i = 2; i < n; i++) {
    maxGiftsAtHouse[i] = Math.max(
      maxGiftsAtHouse[i - 1],
      maxGiftsAtHouse[i - 2] + houses[i]
    );
  }
  return Math.max(maxGiftsAtHouse[n - 1], maxGiftsAtHouse[n - 2]);
}
