function travelDistance(map) {
  const rows = map.split("\n");
  let santaPos;
  const childrenPos = {};

  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      if (char === "S") {
        santaPos = { x, y };
      } else if (!isNaN(parseInt(char))) {
        childrenPos[char] = { x, y };
      }
    }
  });

  let totalDistance = 0;

  for (let i = 1; i <= Object.keys(childrenPos).length; i++) {
    const childPos = childrenPos[i];
    if (childPos) {
      totalDistance +=
        Math.abs(childPos.x - santaPos.x) + Math.abs(childPos.y - santaPos.y);
      santaPos = childPos;
    }
  }

  return totalDistance;
}
