# Challenge #3: 😏 The Naughty Elf

## 🔢 Instructions

In Santa's workshop, a mischievous elf has been playing in the gift manufacturing chain, adding or removing an unplanned step.

You have the original sequence of steps in the original manufacturing chain and the modified sequence that may include an extra step or lack a step.

Your task is to write a function that identifies and returns the first extra step that has been added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

### Example:

```javascript
const original1 = 'abcd';
const modified1 = 'abcde';
console.log(findNaughtyStep(original1, modified1)); // 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // ''
```

### Please note:

- There will always be one step of difference or none.
- The modification can occur anywhere in the chain.
- The original sequence can be empty.