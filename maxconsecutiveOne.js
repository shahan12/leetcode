var longestOnes = function (nums, k) {
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      k--;
    }
    if (k < 0 && nums[a] == 0) {
      a++;
      k++;
    }
  }
  console.log(a);
  return nums.length - a;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
