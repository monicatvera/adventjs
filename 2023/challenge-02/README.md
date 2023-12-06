# Challenge #2: 🏭 Factory in Action!

## 🔢 Instructions

In Santa's workshop, the elves have a list of gifts they want to manufacture and a limited set of materials.

The gifts are strings, and the materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of gifts that can be manufactured.

A gift can be manufactured if we have all the necessary materials to make it.

### Example:

```javascript
const gifts1 = ['tren', 'oso', 'pelota'];
const materials1 = 'tronesa';
console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]
// 'tren' YES because its letters are in 'tronesa'
// 'oso' YES because its letters are in 'tronesa'
// 'pelota' NO because its letters are NOT in 'tronesa'

const gifts2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';
console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ['libro', 'ps5'];
const materials3 = 'psli';
console.log(manufacture(gifts3, materials3)); // []
```