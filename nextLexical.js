// find the dip index
// find the smallest after dip
// swap dip and smallest
//sort after dip index

function biggerIsGreater(w) {
  let dipIndex = -1;
  // Write your code here
  // Find dip index
  for (let i = w.length - 2; i > -1; i--) {
    if (w[i] < w[i + 1]) {
      dipIndex = i;
      break;
    }
  }
  if (dipIndex == -1) {
    return "no awnser";
  } else {
    let strArr = w.split("");
    for (let i = w.length - 1; i > dipIndex; i--) {
      if (strArr[i] > strArr[dipIndex]) {
        [strArr[i], strArr[dipIndex]] = [strArr[dipIndex], strArr[i]];
        break;
      }
    }
    strArr.splice(
      dipIndex + 1,
      w.length - dipIndex - 1,
      ...strArr.splice(dipIndex + 1).reverse()
    );
    console.log(strArr);
  }
}

biggerIsGreater("dkhc");
