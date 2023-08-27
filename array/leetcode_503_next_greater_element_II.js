/**
 * https://leetcode.com/problems/next-greater-element-ii/submissions/959110606/
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    // 0 % 3 = 0
    // 
    let updated = 0;
    let n = nums.length;
    let nums1 = [];
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < i + n; j++) {
            if(nums[i] < nums[j % n]) {
                updated = 1;
                nums1[i] = nums[j % n];
                break;
            }
        }
        if(!updated) nums1[i] = -1;
        updated = 0;
    }
    return nums1;
};