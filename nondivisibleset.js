//start by creating an array containting the count of remaiders from 1 to the target
// for 0 we increase count by
// for middle we increase count by 1
// for adjesent pair of array we take max btwn the pair

function nonDivisibleSubset(k, s) {
  // Write your code here
  let modArr = new Array(k).fill(0);
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    modArr[s[i] % k] = modArr[s[i] % k] + 1;
  }

  // check 0 mid and adjescents and incerease value
  if (modArr[0] > 0) {
    ans++;
  }

  // loop to check adjescent pair
  for (let i = 1; i < Math.floor((k + 2) / 2); i++) {
    if (i + i == k) {
      ans++;
    } else {
      ans += Math.max(modArr[i], modArr[k - i]);
    }
  }
  return ans;
}
nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]);
