/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let output = [];
    if (nums.length == 1) return [[...nums]];

    for(let i = 0; i < nums.length; i++) {
        let n = nums.shift();
        let perms = permute(nums);
        perms.forEach(x => x.push(n));
        output.push(...perms);
        nums.push(n);
    }
    return output;
};
console.log(permute([]))