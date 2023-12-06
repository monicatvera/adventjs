function maxDistance(movements) {
  let left = 0;
  let right = 0;
  let anyWhere = 0;

  for (let i = 0; i < movements.length; i++) {
    switch (movements[i]) {
      case "<":
        left++;
        break;
      case ">":
        right++;
        break;
      default:
        anyWhere++;
    }
  }

  const difference = Math.abs(left - right);
  const result = difference + anyWhere;

  return result;
}
