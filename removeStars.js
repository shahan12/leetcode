/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let s1 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "*") {
      s1.push(s[i]);
    } else if (s[i] == "*") {
      s1.pop();
    }
  }
  return s1.join("");
};
