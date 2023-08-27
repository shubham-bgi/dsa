/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let largest = [0,0];
    let dp = Array(s.length).fill(0);
    dp = dp.map(value => value = Array(s.length).fill(0));
    for(let i = 0; i<dp.length; i++){
        dp[i][i] = 1;
        if(s[i+1] && s[i] == s[i+1]) {
            dp[i][i+1] = 1;
            largest = [i, i+1]
        }
    }
    
    let gap = 2;
    while(gap<s.length) {
        for(let i=0; i+gap<s.length; i++){
            let j = i+gap;
            if(s[i] === s[j] && dp[i+1][j-1] === 1) {
                if((j-i) > largest[1]-largest[0]) {
                    largest = [i,j];
                }
                dp[i][j] = 1;
            }
        }
        gap++;
    }
    return s.slice(largest[0], largest[1]+1);
};

console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('asaa'));
console.log(longestPalindrome('a'));

