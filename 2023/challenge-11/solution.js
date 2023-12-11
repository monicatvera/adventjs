function getIndexsForPalindrome(word) {
  const isPalindrome = (str) => str === str.split("").reverse().join("");

  if (isPalindrome(word)) {
    return [];
  }

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const swapped = [...word];
      [swapped[i], swapped[j]] = [swapped[j], swapped[i]];
      if (isPalindrome(swapped.join(""))) {
        return [i, j];
      }
    }
  }

  return null;
}
