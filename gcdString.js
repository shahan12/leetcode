// concat booth string if reverse is same then proceede
// find gcd of the length of both the strings
// return the string from 0 to gcd value

function gcd(a, b) {
  while (b != 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 != str2 + str1) {
    return "";
  } else {
    let val = gcd(str1.length, str2.length);
    return str1.substring(0, val);
  }
};

console.log(gcdOfStrings("LEET", "CODE"));
