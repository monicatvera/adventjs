function distributeGifts(weights) {
  const res = [];
  let topRow = [];
  let bottomRow = [];

  for (const [y, weight] of weights.entries()) {
    topRow = weights[y - 1];
    bottomRow = weights[y + 1];
    res[y] = [];

    for (const [x, w] of weight.entries()) {
      let top = topRow?.[x],
        bottom = bottomRow?.[x];
      let left = weight?.[x - 1],
        right = weight?.[x + 1];
      const divisor = !!w + !!top + !!bottom + !!left + !!right;
      (top ??= 0), (bottom ??= 0), (left ??= 0), (right ??= 0);

      const newValue = Math.round((w + top + bottom + left + right) / divisor);
      res[y][x] = newValue;
    }
  }

  return res;
}
