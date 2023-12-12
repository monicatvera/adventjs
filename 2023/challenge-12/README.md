## Challenge #12: 📸 Is it a valid copy?

In the magical realm of the North Pole, the elves utilize antiquated paper photocopiers to duplicate the heartfelt letters children send to Santa. However, the copies aren't perfect; with each iteration, the quality slightly diminishes due to generational loss.

Your mission is to develop an algorithm that can discern whether one letter is a copy of another. The letters are lengthy, making direct reading impractical, but you can compare them using a specific set of rules.

### Rules of Generational Loss:

- Characters from A to Z degrade from uppercase to lowercase (A-Z ⇒ a-z).
- Letters degrade in a series of characters in this order: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒.
- Characters that are not letters (like digits) do not degrade.

### Function Signature

```javascript
/**
 * Determines if one letter is a valid copy of another, considering generational loss.
 * @param {string} original - The original letter.
 * @param {string} copy - The copied letter.
 * @returns {boolean} - Returns true if the copy is a valid copy of the original, false otherwise.
 */
function checkIsValidCopy(original, copy) {
  // Implementation goes here
}
```

## Examples

```javascript
checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'); // Returns: true
checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#'); // Returns: false (for the initial p)
checkIsValidCopy('Santa Claus', 's#+:. c:. s'); // Returns: true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s'); // Returns: false (there is a # where it should not be)
```

**Explanation**

- The function should determine if the copy is a valid copy of the original, considering the rules of generational loss.
- The degradation of letters does not occur in a specific order; it is random with each copy.
- Ensure the provided examples match the expected output.
- Feel free to add more examples or edge cases to thoroughly test the function.
