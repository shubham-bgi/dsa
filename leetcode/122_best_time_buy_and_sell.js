/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyDay = prices[0];
    let sellDay;
    let total = 0;
    let max = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < buyDay) {
            buyDay = prices[i];
            total+=max;
            max = 0;
            sellDay = undefined;
        } else if (prices[i] < sellDay) {
            buyDay = prices[i];
            total+=max;
            max = 0;
            sellDay = undefined;
        } else {
            let current = prices[i] - buyDay;
            if(current > max) {
            max = current;
            sellDay = prices[i];
            }
        }
    }
    total+=max;
    return total;
};
console.log(maxProfit([2,1,2,0,1]));