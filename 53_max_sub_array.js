/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let max = nums[0];
    nums.forEach((x,j) => {
        if(sum < 0) {
            sum = 0;
        }
        sum += x;
        if(sum > max) {
            max = sum;
        }
    });
    return max;
};
maxSubArray([-1,-2])