var singleNumber = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) == 1) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else map.set(nums[i], 1);
  }
  for (let val of map.keys()) {
    if (map.get(val) == 1) {
      return val;
    } else continue;
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
