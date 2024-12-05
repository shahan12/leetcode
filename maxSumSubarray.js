//Kadane's Algo
// take a loop through the array and check if sum > 0 if so carry forward
// else make next item sum and compare with max

var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = nums[i];
    } else {
      sum = sum + nums[i];
    }
    if (sum > max) {
      max = sum;
    }
  }

  return sum;
};
