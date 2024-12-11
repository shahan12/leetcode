var reverseWords = function (s) {
  let arr = s.trim().split(" ");
  let ansArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "") {
      ansArr.push(arr[i]);
    }
  }
  ansArr.reverse();
  return ansArr.join(" ");
};

console.log(reverseWords("a good   example"));
