function checkIsValidCopy(original, copy) {
  let i = -1;
  let res = true;

  for (let o of original) {
    i++;

    if (o.toLowerCase() === copy[i]) continue;

    const symbols = [o, o.toLowerCase(), "#", "+", ":", ".", " ", ""];

    const symbolIndex =
      (/([A-Z])|([a-z])|(\#)|(\+)|(\:)|(\.)|(\s)/g.exec(o)?.lastIndexOf(o) ??
        1) - 1;

    res = [false, [false, true][+symbols.slice(symbolIndex).includes(copy[i])]][
      +res
    ];
  }

  return res;
}
