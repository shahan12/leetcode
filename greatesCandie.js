var kidsWithCandies = function (candies, extraCandies) {
  let max = -Infinity;
  let ans = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      ans.push(true);
    } else ans.push(false);
  }
  return ans;
};
