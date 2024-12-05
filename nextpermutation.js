//3 Step
//Find the index where number increasing order is not found
//Find the number greater that breakpoint number
//swap smallest with breakpoint

var nextPermutation = function (nums) {
  let dipIndex = -1;

  for (let i = nums.length - 2; i > -1; i--) {
    if (nums[i] < nums[i + 1]) {
      dipIndex = i;
      break;
    }
  }

  if (dipIndex === -1) {
    return nums.reverse();
  } else {
    for (let i = nums.length - 1; i >= dipIndex; i--) {
      if (nums[i] > nums[dipIndex]) {
        [nums[i], nums[dipIndex]] = [nums[dipIndex], nums[i]];
        break;
      }
    }

    nums.splice(
      dipIndex + 1,
      nums.length - dipIndex - 1,
      ...nums.splice(dipIndex + 1).reverse()
    );

    console.log(nums);
  }
};
nextPermutation([1, 2, 3]);
