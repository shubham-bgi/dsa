/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    function dfs(strPart) {
        let x = [];
        for(let i = 0; i < strPart.length; i++) {
            if(!isNaN(strPart[i])) continue;
            if(strPart.substring(i).length <= 1) return [strPart.toLowerCase(), strPart.toUpperCase()];
            let res = dfs(strPart.substring(i + 1));
            if(!res) res = [strPart.substring(i + 1)];
            res.forEach(str=> {
            x.push(strPart.substring(0, i + 1).toUpperCase() + str);
            x.push(strPart.substring(0, i + 1).toLowerCase() + str);
            });
            return x;
        }
    }
    let res = dfs(s);
    return res ? res: [s];
};

console.log(letterCasePermutation('12'))