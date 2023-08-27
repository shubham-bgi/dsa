// https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    dp = Array(rows).fill(0);
    dp = dp.map(x => x = Array(cols).fill(0));
    dp[0][0] = grid[0][0];
    for(let i = 0; i < grid.length - 1; i++) {
        dp[i+1][0] = dp[i][0] + grid[i+1][0]
    }
    for(let i = 0; i < grid[0].length - 1; i++) {
        dp[0][i+1] = dp[0][i] + grid[0][i+1];
    }
    for(let i = 1; i<grid.length; i++) {
        for(let j = 1; j<grid[0].length; j++){
            if(dp[i-1][j] > dp[i][j-1]) dp[i][j] = grid[i][j] + dp[i][j-1];
            else dp[i][j] = grid[i][j] + dp[i-1][j];
        }
    }
    return dp[dp.length -1][dp[0].length -1]
};

let grid = [[1,2,3],[4,5,6]];
console.log(minPathSum(grid));