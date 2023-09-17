/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let spoint = s.length - 1;
    let tpoint = t.length - 1;
    let sskip = 0;
    let tskip = 0;

    while(spoint >= 0 || tpoint >= 0) {
        while (spoint >= 0) {
            if(s[spoint] == '#') {
                spoint --;
                sskip ++;
            } else if (sskip > 0) {
                spoint --;
                sskip --;
            } else {
                break;
            }
        }
        while (tpoint >= 0) {
            if(t[tpoint] == '#') {
                tpoint --;
                tskip ++;
            } else if (tskip > 0) {
                tpoint --;
                tskip --;
            } else {
                break;
            }
        }
        if(s[spoint] != t[tpoint]) return false;
        spoint--;
        tpoint--;
    }
    return true
};

console.log(backspaceCompare("a##c", "c"))