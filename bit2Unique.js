function bitMan(A) {
  let xor = 0;
  //Find the xor of whole array --> Give the xor of the 2 unique elements
  //for the xor find the first occurance of 1 bit
  // for all with 0 at ith occurance and all with 1 occurance find xor to revel the nos
  for (let i = 0; i < A.length; i++) {
    xor = xor ^ A[i];
  }
  let index = 0;
  while (xor) {
    if ((xor & 1) == 1) {
      break;
    }
    xor >> 1;
    index--;
  }

  let zeroA = 0;
  let oneA = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] & (1 << index == 1)) {
      oneA ^= A[i];
    } else {
      zeroA ^= A[i];
    }
  }
}

bitMan([1, 2, 3, 1, 2, 4]);
