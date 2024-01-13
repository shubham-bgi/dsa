/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let res = "";
    let resLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if(r-l+1 > resLength) {
                resLength = r-l+1;
                res = s.slice(l,r+1);
            }
            l--;
            r++;
        }
        l = i;
        r = i+1;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if(r-l+1 > resLength) {
                resLength = r-l+1;
                res = s.slice(l,r+1);
            }
            l--;
            r++;
        }
    }

    return res;
};

