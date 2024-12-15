var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (i < s.length && s[i] == t[j]) {
      i++;
      j++;
    } else j++;
  }
  console.log(i);
  return i == s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
