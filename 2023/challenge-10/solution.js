function createChristmasTree(ornaments, height) {
  let tree = "";
  let index = 0;

  for (let j = 0; j < height; j++) {
    tree +=
      " ".repeat(height - j - 1) +
      Array.from(
        { length: j + 1 },
        () => ornaments[index++ % ornaments.length]
      ).join(" ") +
      "\n";
  }

  tree += " ".repeat(height - 1) + "|\n";

  return tree;
}
