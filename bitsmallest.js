function smallestxor(A, B) {
  let ans = A;
  let count = 0;
  while (ans) {
    if (ans & (1 == 1)) {
      count++;
      ans = ans >> 1;
    }
  }
  if (count == B) return A;
  // in case count is greater and B we reduce the count by removing set bits from left
  else {
    for (let i = 0; i <= 30; i++) {
      if (count > B) {
        if ((A & (1 << i)) >= 1) {
          A = A ^ (1 << i);
          count--;
        }
      }
      if (count < B) {
        if ((A & (1 << i)) <= 0) {
          A = A ^ (1 << i);
          count++;
        }
      }
    }
    return A;
  }
}

console.log(smallestxor(3, 3));
