//2pointer i,j
// move j formward and pit values into a map
// if map has the value then change i to max of index of value , i
// length max (len , i-j+1)

function maxSubString(val) {
  let i = 0;
  let j = 0;
  let maxLength = 0;

  let map = new Map();

  for (j = 0; j < val.length; j++) {
    if (map.has(val[j])) {
      // check for higher index where we can put i
      i = Math.max(map.get(val[j]) + 1, i);
    } else {
      // push value to map with index and check lenght
      map.set(val[j], j);
      maxLength = Math.max(maxLength, j - i + 1);
    }
    console.log(maxLength, i, j, [...map]);
  }

  return maxLength;
}

console.log(maxSubString("Shahan"));
