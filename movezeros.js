var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      count++;
      i--;
    }
  }
  while (count > 0) {
    nums.push(0);
    count--;
  }
  console.log(count);
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
