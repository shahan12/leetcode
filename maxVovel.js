var maxVowels = function (s, k) {
  let max = 0;
  let arr = s.split("");
  for (let i = 0; i < k; i++) {
    if (
      arr[i] == "a" ||
      arr[i] == "e" ||
      arr[i] == "i" ||
      arr[i] == "o" ||
      arr[i] == "u"
    ) {
      max++;
    }
  }
  if (max == k) {
    return max;
  } else {
    let currSum = max;
    for (let i = k; i < arr.length; i++) {
      if (
        arr[i] == "a" ||
        arr[i] == "e" ||
        arr[i] == "i" ||
        arr[i] == "o" ||
        arr[i] == "u"
      ) {
        currSum++;
      }
      if (
        arr[i - k] == "a" ||
        arr[i - k] == "e" ||
        arr[i - k] == "i" ||
        arr[i - k] == "o" ||
        arr[i - k] == "u"
      ) {
        currSum--;
      }
      max = Math.max(max, currSum);
    }
  }
  return max;
};
