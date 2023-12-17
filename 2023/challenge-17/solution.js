function optimizeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = result[result.length - 1];
    let nextInterval = intervals[i];
    if (nextInterval[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      result.push(nextInterval);
    }
  }

  return result;
}
