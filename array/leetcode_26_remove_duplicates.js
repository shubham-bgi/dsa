/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    pointer = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[pointer] == nums[i]) continue;
        pointer++;
        nums[pointer] = nums[i];
        if(nums[i] == nums[nums.length - 1]) break;
    }
    return pointer + 1;

};

removeDuplicates([1,1,2,3,5]);
// let numSet = new Set(nums);
// let l = nums.length;
// nums = Array.from(numSet);
// nums.length = l;
// return numSet.size;