// Take 3 pointer
// check mid if it is 0 then increase low and min and swap
// if mid ==1 then incerase mid
// if mid ==2 then decrease hig

var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else if (nums[mid] == 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
};

sortColors([1, 2, 0]);
