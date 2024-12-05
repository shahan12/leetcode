var getRow = function (rowIndex) {
  let ans = [1];
  let tempAns = 1;

  for (let i = 1; i <= rowIndex; i++) {
    tempAns = tempAns * (rowIndex + 1 - i);
    tempAns = tempAns / i;
    ans.push(tempAns);
  }
  return ans;
};

console.log(getRow(3));

// formula ans = ans* row - col / col
