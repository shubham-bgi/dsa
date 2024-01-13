/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for(let i = 1; i <= amount; i++) {
        coins.forEach((c) => {
            if(i - c >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i-c])
            } 
        })
    }
    return dp[amount] != amount + 1 ? dp[amount] : -1;
};

console.log(coinChange([186,419,83,408],6249));