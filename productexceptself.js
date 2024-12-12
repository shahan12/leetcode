// Find prefix by multiplying 0 to n
// Find postfix by ultipying n to 1
// result = prefix * postfix

var productExceptSelf = function (nums) {
  let ans = new Array(nums.length);
  let pre = 1;
  for (let i = 0; i < ans.length; i++) {
    ans[i] = pre;
    pre = pre * nums[i];
  }
  console.log(ans, "here");
  let post = 1;
  for (let i = ans.length - 1; i > -1; i--) {
    ans[i] = ans[i] * post;
    post = post * nums[i];
  }
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));
