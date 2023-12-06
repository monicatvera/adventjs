function findNaughtyStep(original, modified) {
  if (original === modified) return "";

  let i = 0;
  while (original[i] === modified[i++]);

  return (original.length > modified.length ? original : modified)[i - 1];
}
