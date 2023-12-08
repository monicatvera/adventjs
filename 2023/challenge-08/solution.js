function organizeGifts(gifts) {
  let result = "";
  let qty = "";

  for (let i = 0; i < gifts.length; i++) {
    if (isNaN(gifts[i])) {
      let number = parseInt(qty);
      while (number >= 50) {
        const pallets = Math.floor(number / 50);
        result += `[${gifts[i]}]`.repeat(pallets);
        number -= 50 * pallets;
      }
      while (number >= 10) {
        const boxes = Math.floor(number / 10);
        result += `{${gifts[i]}}`.repeat(boxes);
        number -= 10 * boxes;
      }
      if (number >= 1) {
        result += `(${gifts[i].repeat(number)})`;
      }
      qty = "";
    } else {
      qty += gifts[i];
    }
  }
  return result;
}
