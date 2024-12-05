var setZeroes = function (m) {
  let a = m.length;
  let b = m[0].length;
  let col = Array(a).fill(0);
  let row = Array(b).fill(0);
  console.log(col.length, row.length);
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      if (m[i][j] == 0) {
        row[j] = 1;
        col[i] = 1;
      }
    }
  }

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      if (row[i] || col[j]) {
        m[i][j] = 0;
      }
      console.log(m[i][j]);
    }
  }
};

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
