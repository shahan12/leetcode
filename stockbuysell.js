// iterate take minimum number as day to buy and from that minum calculate profit
// on every next element

var maxProfit = function (num) {
  let min = num[0];
  let profit = 0;

  for (let i = 1; i < num.length; i++) {
    min = Math.min(min, num[i]);
    profit = Math.max(profit, num[i] - min);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
