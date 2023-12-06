function decode(message) {
  let i;
  while ((i = message.lastIndexOf("(")) + 1) {
    const j = message.indexOf(")", i);
    if (j + 1)
      message =
        message.slice(0, i) +
        message
          .slice(i + 1, j)
          .split("")
          .reverse()
          .join("") +
        message.slice(j + 1);
  }
  return message;
}
