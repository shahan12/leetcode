var decodeString = function (s) {
  let muliply = [];
  let tempmul = "";
  let repString = [];
  let sol = "";
  for (let char of s) {
    if (!isNaN(char)) {
      tempmul = `${tempmul}${char}`;
    } else if (char == "[") {
      muliply.push(tempmul);
      tempmul = "";
      repString.push(sol);
      sol = "";
    } else if (char == "]") {
      sol = repString.pop() + sol.repeat(muliply.pop());
    } else {
      sol += char;
    }
  }
  return sol;
};

console.log(decodeString("100[leetcode]"));
