/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let map = new Map();
  let pairs = 0;
  for (let i = 0; i < grid.length; i++) {
    if (map.has(JSON.stringify(grid[i]))) {
      map.set(JSON.stringify(grid[i]), map.get(JSON.stringify(grid[i])) + 1);
    } else map.set(JSON.stringify(grid[i]), 1);
  }
  const transpose = grid[0].map((_, colIndex) =>
    grid.map((row) => row[colIndex])
  );
  for (let i = 0; i < transpose.length; i++) {
    if (map.has(JSON.stringify(transpose[i]))) {
      pairs += map.get(JSON.stringify(transpose[i]));
    }
  }
  return pairs;
};
