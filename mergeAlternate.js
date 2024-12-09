var mergeAlternately = function (word1, word2) {
  let ans = "";
  let max = word1.length > word2.length ? word1.length : word2.length;
  for (let i = 0; i < max; i++) {
    ans = ans + (word1[i] ? word1[i] : "") + (word2[i] ? word2[i] : "");
  }
  console.log(ans.trim());
};
mergeAlternately("abc", "pqr");
