/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let numsObj = {}
    nums.forEach(x => {
        if(x >= k) return;
        if(!numsObj[x]) numsObj[x] = 1;
        else numsObj[x]++;
    });
    let operations = 0;
    for(let num in numsObj) {
        let otherNum = k - num;
        if(num == otherNum) {
            operations += Math.floor(numsObj[num] / 2);
        } else if(numsObj[otherNum]) {
            operations += Math.min(numsObj[otherNum], numsObj[num]);
        }
        delete numsObj[num];
    }
    return operations;
};

console.log(maxOperations([3,1,3,4,3], 6))