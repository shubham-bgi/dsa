function main(arr) {
    let mem = {};
    function findPath(i,j) {
        if(mem[`${i}${j}`] || mem[`${i}${j}`] == 0) return mem[`${i}${j}`];
        let sum = [0];
        if(i-1 >= 0 && arr[i][j] < arr[i-1][j]) {
            sum.push(findPath(i-1,j) + 1);
        }
        if(j-1 >= 0 && arr[i][j] < arr[i][j-1]) {
            sum.push(findPath(i,j-1) + 1);
        }
        if(i+1 < arr.length && arr[i][j] < arr[i+1][j]) {
            sum.push(findPath(i+1,j) + 1);
        }
        if(j+1 > arr[0].length && arr[i][j] < arr[i][j+1]) {
            sum.push(findPath(i,j+1) + 1);
        }
        let max = Math.max(...sum);
        mem[`${i}${j}`] = max;
        return max;
    }
    let total = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[0].length; j++) {
            total.push(findPath(i,j) + 1);
        }
    }
    console.log(Math.max(...total));
 }

main([[9,9,4], [6,6,8], [2,1,1]]);