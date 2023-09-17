/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let longestSeq = 1;
    let seq = 1;
    for(let i = 0; i < nums.length; i++) {
        let number = nums[i]
        if(numSet.has(number-1)) continue;
        while(true) {
            number++;
            if(numSet.has(number)) seq++;
            else break;
        }
        longestSeq = Math.max(longestSeq, seq);
    }
    return longestSeq;
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))