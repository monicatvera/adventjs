function getStaircasePaths(steps, maxJump) {
  let result = [];

  function findPaths(currentPath, stepsRemaining) {
    if (stepsRemaining === 0) {
      result.push(currentPath);
      return;
    }

    for (let i = 1; i <= Math.min(maxJump, stepsRemaining); i++) {
      findPaths([...currentPath, i], stepsRemaining - i);
    }
  }

  findPaths([], steps);
  return result;
}
