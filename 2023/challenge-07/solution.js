function drawGift(size, symbol) {
  const result = [];

  function createLine(spacesBefore, content) {
    result.push(" ".repeat(spacesBefore) + content);
  }

  createLine(size - 1, "#".repeat(size));

  for (let i = 0; i < size - 2; i++) {
    const spaces = size - 2 - i;
    const inner =
      " ".repeat(spaces) +
      "#" +
      symbol.repeat(size - 2) +
      "#" +
      symbol.repeat(i) +
      "#";
    createLine(0, inner);
  }

  if (size > 1) {
    const mid = "#".repeat(size) + symbol.repeat(size - 2) + "#";
    createLine(0, mid);

    for (let i = 0; i < size - 2; i++) {
      const inner =
        "#" + symbol.repeat(size - 2) + "#" + symbol.repeat(size - 3 - i) + "#";
      createLine(0, inner);
    }
  }

  if (size - 2 >= 0)
    createLine(0, [..."#".repeat(size)].reverse().join("").trim());
  result.push("");
  return result.join("\n");
}
