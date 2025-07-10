var minFlips = function (a, b, c) {
  let count = 0;
  while (a || b || c) {
    const bitA = a & 1;
    const bitB = b & 1;
    const bitC = c & 1;

    if ((bitA || bitB) !== bitC) {
      if (bitC == 0) {
        if (bitA == 1) {
          count++;
        }
        if (bitB == 1) {
          count++;
        }
      } else count++;
    }
    a = a >> 1;
    b = b >> 1;
    c = c >> 1;
  }
  return count;
};

console.log(minFlips(1, 2, 3));
