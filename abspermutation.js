function absolutePermutation(n, k) {
  // Write your code here
  const map = new Map();
  for (let i = 1; i <= n; i++) {
    if (i - k > 0 && !map.has(i - k)) {
      map.set(i - k, i);
    } else if (i + k <= n) {
      map.set(i + k, i);
    } else return [-1];
  }
  return [...map.keys()];
}

console.log(absolutePermutation(10, 5));
