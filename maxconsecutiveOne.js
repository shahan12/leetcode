var longestOnes = function (nums, k) {
  let max = 0;
  let left=0,right=0,zero=0;
  while(right < nums.length){
    if(nums[right] == 0){
      k--
    }
    if(k<0){
      if(nums[left] ==0){
        k++;
      }
      left++
    }
    if(k>-1){
      max = Math.max(max , (right-left+1))
    }
    right++
  }
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
