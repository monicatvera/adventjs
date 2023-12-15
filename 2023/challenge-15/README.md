## Challenge #15: ↔️ Autonomous robot

We are developing autonomous robots, called giftbots 🤖🎁, to navigate gift warehouses. The task is to create a function that takes the warehouse 🏬 layout and a series of movements ↔️ as inputs.

The warehouse is represented as an array of text strings, where:

- `.` indicates a clear path.
- `*` represents an obstacle.
- `!` marks the initial position of the robot.

The movements are provided as an array of text strings, where:

- `R` moves the robot one position to the right.
- `L` moves the robot one position to the left.
- `U` moves the robot one position upwards.
- `D` moves the robot one position downwards.

The robot cannot pass through obstacles or go beyond the warehouse boundaries.

## Function Signature

```javascript
function autonomousDrive(store, movements) {
  // Function implementation
}
```

## Examples
```javascript
const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

// The last movement is to the left, but it cannot move because there is an obstacle.
```
Keep in mind that the store is an array that can have a number of rows ranging from 1 to 100, as we have warehouses of all sizes.

Also note that the robot might end up in its initial position if it can't move or if it's going around in circles.
