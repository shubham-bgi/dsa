/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = []
    for (let i of nums) {
        i = i < 0 ? i * -1 : i;
        if(nums[i - 1] < 0) continue;
        else nums[i - 1] = nums[i - 1] * -1; 
    }
    nums.forEach((x, i) => {
        if(x > 0) res.push(i + 1);
    })
    return res;
};

const res = findDisappearedNumbers([4,3,2,7,8,2,3,1]);
console.log(res);