/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumRight = [];
    for(let i = nums.length - 1; i >= 0; i--) {
        sumRight[i] = nums[i] + (sumRight[i+1] || 0);
    }
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(sum == (sumRight[i + 1] || 0)) return i;
        sum += nums[i];
    }
    return -1;
};
