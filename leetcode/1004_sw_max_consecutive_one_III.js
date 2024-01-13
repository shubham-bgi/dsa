/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
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
    return max;
};

console.log(longestOnes([1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,
    0,1,1,1,1,1,1,
    0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1], 9));