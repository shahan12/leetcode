/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  if (flowerbed.length == 1 && flowerbed[0] == 0) return true;
  else if (flowerbed.length == 2 && flowerbed[0] == 0 && flowerbed[1] == 0) {
    flowerbed[0] = 1;
    count++;
  } else {
    if (
      flowerbed[flowerbed.length - 1] == 0 &&
      flowerbed[flowerbed.length - 2] == 0
    ) {
      flowerbed[flowerbed.length - 1] = 1;
      count++;
    }
    if (flowerbed[0] == 0 && flowerbed[1] == 0) {
      flowerbed[0] = 1;
      count++;
    }
    for (let i = 1; i < flowerbed.length - 1; i++) {
      if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }
  if (count >= n) {
    return true;
  } else return false;
};

console.log(canPlaceFlowers([0, 0], 2));
