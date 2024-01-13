/**
 * DP solution- bottom up TC - O(m*n), SC - O(n)
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let row = Array(n).fill(1);
    for(let i = m-1; i > 0; i--) {
        let newRow = Array(n).fill(1);
        for(let j = n - 2; j >= 0; j--) {
            newRow[j] = newRow[j+1] + row[j];
        }
        row = newRow;
    }
    return row[0];
};


uniquePaths(3,7);


/**
 * TIME LIMIT EXCEED - My sol
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsR = function(m, n) {
    let total = 0;
    function backtrack(i, j) {
        if(i > m) return;
        if(j > n) return;
        if(i == m && j == n) {
            total++;
            return;
        }
        backtrack(i, j+1);
        backtrack(i+1, j);
    }
    backtrack(1,1);
    return total;
};