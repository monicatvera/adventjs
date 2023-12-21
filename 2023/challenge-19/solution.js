function revealSabotage(store) {
  let prevRow;
  let nextRow;
  for (const [i, row] of store.entries()) {
    nextRow = store[i + 1];
    for (const [b, cell] of row.entries()) {
      if (cell != "*") {
        const calc =
          +(prevRow?.[b - 1] == "*") +
          +(prevRow?.[b] == "*") +
          +(prevRow?.[b + 1] == "*") +
          +(row?.[b - 1] == "*") +
          +(row?.[b + 1] == "*") +
          +(nextRow?.[b - 1] == "*") +
          +(nextRow?.[b] == "*") +
          +(nextRow?.[b + 1] == "*");
        if (calc > 0) {
          row[b] = calc.toString();
        }
      }
    }
    prevRow = row;
  }
  return store;
}
