/**
 * https://leetcode.com/problems/next-greater-element-i/description/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function(nums1, nums2) {
//     let found = 0;
//     let updated = 0;
//     for(let i = 0; i < nums1.length; i++) {
//         for(let j = 0; j<nums2.length; j++) {
//             if(nums1[i] == nums2[j]) {
//                 found = 1;
//             } else if (found && nums1[i] < nums2[j]) {
//                     updated = 1;
//                     nums1[i] = nums2[j];
//                     break;
//             }
//         }
//         if(!updated) nums1[i] = -1;
//         found = 0;
//         updated = 0;
//     }
//     return nums1;
// };


//Try to do with hash map
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let nums1Obj = {};
    nums1.forEach((num, i) => {nums1Obj[num] = i;})
    let res = Array(nums1.length).fill(-1);
    for(let i = 0; i < nums2.length; i++) {
        while(stack.length && stack[stack.length - 1] < nums2[i]) {
            let value = stack.pop();
            let idx = nums1Obj[value];
            res[idx] = nums2[i];
        }
        if(nums1Obj.hasOwnProperty(nums2[i])){
            stack.push(nums2[i]);
        }
    }
    return res;
};

nextGreaterElement([2,4], [1,2,3,4]);