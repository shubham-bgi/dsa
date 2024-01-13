/**
 * same as 1004 max consecutive ones.
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let k = 1;
    let start = 0;
    let end = 0;
    let max = 0;
    let cur = 0;
    let flipped = 0;
    while (end < nums.length) {
        if(nums[end] == 1) {
            cur++;
        } else if(flipped < k){
            flipped++;
            cur++;
        } else {
            while (nums[start] == 1 && start < end) {
                start++;
                cur--;
            }
            start++;
        }
        max = Math.max(max, cur);
        end++;
    }
    return max - 1;
};