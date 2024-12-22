var asteroidCollision = function (ass) {
  let ans = [];
  for (let i = 0; i < ass.length; i++) {
    if (ass[i] > 0) {
      ans.push(ass[i]);
    } else {
      while (ans.length && ans[ans.length - 1] < Math.abs(ass[i])) {
        ans.pop();
      }
      if (ans.length && ans[ans.length - 1] == Math.abs(ass[i])) {
        ans.pop();
      } else if (ans.length == 0 || ans[ans.length - 1] < 0) {
        ans.push(ass[i]);
      }
    }
  }
  return ans;
};
console.log(asteroidCollision([-2, -1, 1, 2]));
