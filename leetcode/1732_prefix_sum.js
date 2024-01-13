/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let sum = 0;
    gain.forEach(g => {
        sum += g;
        max = Math.max(max, sum);
    });
    return max;
};