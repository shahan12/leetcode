var maxArea = function (height) {
  let start = 0;
  let endPoint = height.length - 1;
  let maxArea = 0;
  while (start != endPoint) {
    if (height[start] > height[endPoint]) {
      maxArea = Math.max(maxArea, height[endPoint] * (endPoint - start));
      endPoint--;
    } else {
      maxArea = Math.max(maxArea, height[start] * (endPoint - start));
      start++;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
