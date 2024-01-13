/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let start = 0;
    let end = 0;
    let max = 0;
    let cur = 0;
    while( end < s.length) {
        if((end - start) >= k && vowels.has(s[start++])) cur--;
        if(vowels.has(s[end++])) cur++;
        max = Math.max(max, cur);
    }
    return max;
};

console.log(maxVowels("abciiidef", 3));