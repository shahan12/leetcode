function icecreamParlor(m, arr) {
  // Write your code here
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(m - arr[i])) {
      // return map value and arr[i]
      console.log(map.entries);
      return [map.get(m - arr[i]) + 1, i + 1];
    } else map.set(arr[i], i);
  }
}

console.log(icecreamParlor(4, [1, 4, 5, 3, 2]));
