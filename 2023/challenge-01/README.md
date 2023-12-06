# Challenge #1: 🎁 First Repeated Gift!

## 🔢 Instructions

In Santa's toy factory at the North Pole, each toy has a unique identification number.

However, due to a glitch in the toy-making machine, some numbers have been assigned to more than one toy.

Your task is to find the first identification number that has been repeated, where the second occurrence has the smallest index!

In simpler terms, if there are multiple repeated numbers, return the number whose second occurrence appears first in the list. If no numbers are repeated, return -1.

### Example:

```javascript
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Although both 2 and 3 are repeated,
// 3 appears first for the second time

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// It's -1 as no number is repeated

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
```

Be cautious! The elves say that this is a Google technical test.