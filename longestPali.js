function findPali(str) {
  let max = "";
  for (let i = 0; i < str.length; i++) {
    let oddPali = findOddPali(i, i, str);
    let evenPali = findOddPali(i + 1, i, str);
    if (max.length < oddPali.length) max = oddPali;
    if (max.length < evenPali.length) max = evenPali;
  }
  return max;
}

function findOddPali(left, right, str) {
  while (left > -1 && right < str.length && str[left] == str[right]) {
    left--;
    right++;
  }
  return str.substring(left + 1, right);
}
console.log(findPali("babad"));
