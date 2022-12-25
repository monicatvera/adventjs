const solve = (maze) => {
  const used = [];
  let start = [];

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      if (maze[i][j] === 'S') {
        start = [i, j];
        break;
      }
    }
  }

  const checkMovement = (coords) => {
    return (
      maze[coords[0]] &&
      maze[coords[0]][coords[1]] &&
      maze[coords[0]][coords[1]] !== 'W'
    );
  };

  const scape = (maze, currentPositon) => {
    used.push(currentPositon.join(','));

    const [currentRow, currentColumn] = currentPositon;
    const up = [currentRow, currentColumn + 1];
    const down = [currentRow, currentColumn - 1];
    const left = [currentRow - 1, currentColumn];
    const right = [currentRow + 1, currentColumn];
    const possibleMovements = [];

    if (checkMovement(up)) possibleMovements.push(up);
    if (checkMovement(down)) possibleMovements.push(down);
    if (checkMovement(left)) possibleMovements.push(left);
    if (checkMovement(right)) possibleMovements.push(right);

    return possibleMovements.some(
      (movement) =>
        maze[movement[0]][movement[1]] === 'E' ||
        (!used.includes(movement.join(',')) && scape(maze, movement)),
    );
  };

  const possible = scape(maze, start);
  return possible;
};

module.exports = { solve };