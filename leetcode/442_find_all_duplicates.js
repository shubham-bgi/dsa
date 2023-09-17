/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let n = nums.length;
    nums.forEach((x)=> {
        x = x % n;
        nums[x - 1 < 0 ? n - 1 : x - 1] += n;
    })
    let ans = [];
    nums.forEach((x, i)=> {
        if(x > 2*n) ans.push(i+1);
    })
    return ans;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))