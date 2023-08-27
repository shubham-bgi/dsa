/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let steps = [1,2];
    let dp = Array(n+1).fill(0);
    dp[0] = 1;

    for(let i = 1; i <= n; i++){
        for(let j = 0; j<steps.length; j++) {
            if(i-steps[j] >= 0) dp[i] += dp[i - steps[j]];
        }
    }
    return dp[n];
};

climbStairs(2)