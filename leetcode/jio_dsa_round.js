function bruteForce(arr, k) {
    let count = 0;
    for(let i =0; i < arr.length; i++) {
        let flag = 0;
        for(let j = i; j < arr.length; j++) {
            if(arr[j] > k) flag = 1;
            if(flag == 1) count++;
        }
    }
    return count;
}

function optimized(arr, k) {
    let count = 0;
    let start = 0;
    let end  = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > k) {
            end = i;
            count+=numberOfSubArrays(end-start);
            start = end;
        }
    }
    return numberOfSubArrays(arr.length) - count;
}

function numberOfSubArrays(num) {
    return Math.floor((num * (num + 1)) / 2)
}

console.log(optimized([1,-3,0,7,6,-2,9,7, -1, 8], 4)); // 4 - 
console.log(bruteForce([1,-3,0,7,6,-2,9,7, -1, 8], 4)); // 6 - 
