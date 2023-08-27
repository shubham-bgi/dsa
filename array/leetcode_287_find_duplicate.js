//https://leetcode.com/problems/find-the-duplicate-number/
//https://www.youtube.com/watch?v=wjYnzkAhcNk&ab_channel=NeetCode
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    let slow2 = 0;
    while(slow != fast){
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    while(slow != slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }
    return slow2;
};