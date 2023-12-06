# Challenge #4: 😵‍💫 Reverse the Parentheses

In Santa's workshop 🎅, some Christmas messages have been written in a peculiar way: the letters inside the parentheses should be read backward.

Santa needs these messages to be correctly formatted. Your task is to write a function that takes a text string and reverses the characters inside each pair of parentheses, removing the parentheses in the final message.

However, keep in mind that there may be nested parentheses, so you must reverse the characters in the correct order.

## Example:

```javascript
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining -> santaclaus
```
## Notes:

- The input strings will always be well-formed with correctly matching parentheses; no need to validate them.
- There should be no parentheses left in the final message.
- The maximum nesting level is 2.
