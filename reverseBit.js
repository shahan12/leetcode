function reverseBit(A) {
  let ans = "";
  if (A == 0) return A;
  for (let i = 0; i < 32; i++) {
    if ((A & 1) == 1) {
      ans = ans + "1";
    } else ans = ans + "0";
    A = A >> 1;
  }
  return Number(BigInt("0b" + ans));
}

console.log(reverseBit(3));
