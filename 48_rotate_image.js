/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 00, 03, 33, 30
    // 01, 13, 32, 20
    // 02, 23, 31, 10

    // 11, 12, 22, 21 
    let left = 0;
    let top = 0;
    let right = matrix[0].length;
    let bottom = matrix.length;
    while (left < right && top < bottom) {
        let x = 0;
        for(let z = left; z < right - 1; z++) {
            let temp = matrix[top][left+x];
            //top left = bootom left
            matrix[top][left+x] = matrix[bottom-x-1][left];
            //bottom left = bottom right
            matrix[bottom-x-1][left] = matrix[bottom-1][right-x-1];
            //bottom right = top right
            matrix[bottom-1][right-x-1] = matrix[top+x][right-1];
            //top right = top left
            matrix[top+x][right-1] = temp;
            x++;
        }
        left++;
        top++;
        right--;
        bottom--;        
    }
    return matrix;
};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));