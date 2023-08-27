/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = new Set();
    let cols = new Set();
    matrix.forEach(
        (row, i) => {
            row.forEach((x, j) => {
                if(x == 0) {
                    rows.add(i);
                    cols.add(j);
                }
            })
        }
    )
    matrix.forEach(
        (row, i) => {
            row.forEach((x, j) => {
                if(rows.has(i)) {
                    matrix[i][j] = 0;
                    return;
                }
                if(cols.has(j)) {
                    matrix[i][j] = 0;
                }
            })
        }
    )
};
let matrix = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix);
console.log(matrix);