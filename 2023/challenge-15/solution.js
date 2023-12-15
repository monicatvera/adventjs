function autonomousDrive(store, movements) {
  const positions = { R: [0, 1], L: [0, -1], D: [1, 0], U: [-1, 0] };
  const storeArr = store.map((ln) => [...ln]);

  let [initLine, initCol] = storeArr.reduce(
    (acc, ln, index) => (ln.includes("!") ? [index, ln.indexOf("!")] : acc),
    []
  );

  movements.forEach((mov) => {
    const [row, col] = positions[mov];
    const [newRow, newCol] = [initLine + row, initCol + col];

    if (storeArr[newRow]?.[newCol] === ".") {
      storeArr[initLine][initCol] = ".";
      storeArr[newRow][newCol] = "!";
      [initLine, initCol] = [newRow, newCol];
    }
  });

  return storeArr.map((ln) => ln.join(""));
}
