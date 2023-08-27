//https://leetcode.com/problems/container-with-most-water/
//https://www.youtube.com/watch?v=UuiTKBwPgAo&ab_channel=NeetCode

/**
 * Brute force Method
 * @param {number[]} height
 * @return {number}
 */
var maxAreaB = function(height) {
    let maxAmount = 0;
    for(let i = 0; i < height.length - 1; i++) {
        if(height[i] == 0) continue;
        for(let j = i+1; j < height.length; j++) {
            const area = Math.min(height[j], height[i]) * (j-i)
            if( area > maxAmount) maxAmount = area;
        }
    }
    return maxAmount;
};

/**
 * Optimized
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxAmount = 0;
    let i = 0;
    let j = height.length - 1;
    while (j>i) {
        let area = (j-i) * Math.min(height[j], height[i]);
        maxAmount = Math.max(maxAmount, area);
        if(height[j] > height[i]){
            i++;
        } else {
            j--;
        }
    }
    return maxAmount;
};