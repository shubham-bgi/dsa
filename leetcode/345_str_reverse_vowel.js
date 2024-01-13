/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let start = 0;
    let end = s.length - 1;
    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    s = s.split('')
    while (end > start) {
        if(!vowelSet.has(s[end])) end--;
        if(!vowelSet.has(s[start])) start++;
        if(end <= start) break;
        if(vowelSet.has(s[start]) && vowelSet.has(s[end])) {
            let temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            end--;
            start++;
        }
    }
    return s.join('');
};

console.log(reverseVowels('hello'))