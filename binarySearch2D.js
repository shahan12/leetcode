var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let low = 0;
  let high = m * n;
  let mid;
  let midIndexi;
  let midIndexj;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    midIndexi = Math.floor(mid / n);
    midIndexj = Math.floor(mid % n);
    if (matrix[midIndexi][midIndexj] === target) {
      return true;
    } else if (matrix[midIndexi][midIndexj] < target) {
      low = mid + 1;
    } else if (matrix[midIndexi][midIndexj] > target) {
      high = mid - 1;
    }
  }
  return false;
};

console.log(searchMatrix([[1]], 2));
