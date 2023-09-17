/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointEnd = nums.length -1;
    let pointStart = 0;
    while(pointEnd > pointStart) {
        if(nums[pointEnd] > 0 && nums[pointStart] == 0) {
            nums[pointStart] = nums[pointEnd];
            nums[pointEnd] = 0;
            pointStart ++;
            pointEnd --;
        }
        if(nums[pointEnd] == 0) pointEnd --;
        if(nums[pointStart] > 0) pointStart ++;
    }
    return nums;
};