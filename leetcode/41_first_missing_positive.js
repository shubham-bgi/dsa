/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.forEach((x, i) => {
        if(x < 0) nums[i] = 0;
    });
    nums.forEach((x, i) => {
        x = Math.abs(x);
        if(x < 1 || x > nums.length) return;
        i = x-1;
        if(nums[i] == 0) nums[i] = -1 * (nums.length + 1) ;
        else if (nums[i] > 0)nums[i] *= -1;
    });
    let res = nums.length + 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= 0) {res = i + 1; break;}
    }
    return res;
};

console.log(firstMissingPositive([1,1]))


// function firstMissingPositive(nums) {
//     const n = nums.length;
    
//     // Rearrange the elements
//     for (let i = 0; i < n; i++) {
//         while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
//             [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
//         }
//     }
    
//     // Find the first missing positive integer
//     for (let i = 0; i < n; i++) {
//         if (nums[i] !== i + 1) {
//             return i + 1;
//         }
//     }
    
//     return n + 1;
// }

// // Example usage
// const arr = [3, 4, -1, 1, 2];
// const result = firstMissingPositive(arr);
// console.log("The first missing positive integer is:", result); // Output: 2



