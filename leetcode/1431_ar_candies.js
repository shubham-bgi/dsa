/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    candies.forEach(x => {
        max = Math.max(max, x);
    })
    let arr = candies.map( x => x+extraCandies >= max);
    return arr;
};