/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    if(s.length > 12) return res;
    function backtrack(i, dots, curIP) {
        if(dots == 4 && s.length == i) {
            res.push(curIP.slice(0,-1));
            return;
        }
        if(dots >= 4) {
            return;
        }
        for(let j = i; j < Math.min(i+3, s.length); j++) {
            if(Number(s.slice(i, j+1)) < 256 && (i == j || s[i] != "0"))
                backtrack(j+1, dots+1, curIP+ s.slice(i, j+1) + '.');
        }
    }
    backtrack(0, 0, "");
    return res;
};

restoreIpAddresses("25525511135")