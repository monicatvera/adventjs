## Challenge #13: ⌚️ Calculating the time

The elves are preparing for Christmas Eve, and they need your help to determine if they have enough time or not ⏳.

For this, they give you an array with the duration of each delivery. The format of the duration is HH:mm:ss, the deliveries start at 00:00:00, and the time limit is 07:00:00.

Your function must return the time they will lack or the time they will have left over to finish the deliveries. The format of the returned duration should be HH:mm:ss.

If they finish before 07:00:00, the remaining time until 07:00:00 should be displayed with a negative sign. For example, if they have 1 hour and 30 minutes left over, return -01:30:00.

### Function Signature

```javascript
/**
 * Calculates the time needed to finish deliveries or the time left over.
 * @param {string[]} deliveries - An array containing the duration of each delivery in HH:mm:ss format.
 * @returns {string} - Returns the time needed to finish deliveries or the time left over in HH:mm:ss format.
 */
function calculateTime(deliveries) {
  // Implementation goes here
}
```

## Examples

```javascript
calculateTime(['00:10:00', '01:00:00', '03:30:00']);
// Returns: '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00']);
// Returns: '00:30:00'

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]);
// Returns: '-05:29:00'
```
**Explanation**

- The function should calculate the time needed to finish deliveries or the time left over, considering the time limit of 07:00:00.
- Ensure the provided examples match the expected output.
- Feel free to add more examples or edge cases to thoroughly test the function.
