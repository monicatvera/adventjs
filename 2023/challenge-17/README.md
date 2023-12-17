## Challenge #17: 🛷 Optimizing the Rental

In the festive town of Rovaniemi, Finland 🇫🇮, where sleds 🛷 are the preferred mode of winter transportation, we are faced with a challenge in managing the rental intervals. Each sled rental is represented as an array of two elements, denoting the start and end times.

For example, the array `[2, 7]` signifies a rental that commences at hour 2 and concludes at hour 7. However, the intervals sometimes overlap, causing confusion about the exact rental duration.

To streamline the process of calculating the total rental time, your task is to create a function that merges overlapping intervals and produces an array of sorted intervals:

```javascript
optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
]) // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
]) // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
]) // [[1, 2], [3, 4], [5, 6]]
```

You can assume that the first element of each interval is always less than or equal to the second element. But the intervals are not necessarily sorted.

The hour numbers can go up to the figure 9999.