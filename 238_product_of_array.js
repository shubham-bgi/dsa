/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let left = [];
    left[0] = 1;
    left[1] = nums[0];
    for(let i = 2; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    let right = [];
    right[n-1] = 1;
    right[n-2] = nums[n-1];
    for(let i = n-3; i >= 0;i--) {
        right[i] = right[i+1] * nums[i+1];
    }
    return left.map( (x, i) => x * right[i]);
};

console.log(productExceptSelf([5,2,3,4]))