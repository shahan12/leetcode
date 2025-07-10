var countBits = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    let count = 0;
    let curr = i;
    while (curr) {
      if ((curr & 1) == 1) {
        count++;
        curr = curr >> 1;
      } else curr = curr >> 1;
    }
    arr.push(count);
  }
  return arr;
};

console.log(countBits(5));
