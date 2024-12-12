// Take 2 values and add min value and second least value if third is found return true
var increasingTriplet = function (nums) {
  let i = Infinity;
  let j = Infinity;
  if (nums.length < 3) return false;
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] <= i) {
      i = nums[k];
    } else if (nums[k] <= j) {
      j = nums[k];
    } else return true;
  }
  return false;
};

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
