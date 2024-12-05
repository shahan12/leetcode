var generate = function (numRows) {
  let ans = [];
  for (let i = 1; i <= numRows; i++) {
    ans.push(generateCol(i));
  }
  return ans;
};

function generateCol(row) {
  let ans = [1];
  let temp = 1;
  for (let i = 1; i < row; i++) {
    temp = temp * (row - i);
    temp = temp / i;

    ans.push(temp);
  }
  return ans;
}

generate(5);

// formula for pascals triangle is n-1Cr-1
