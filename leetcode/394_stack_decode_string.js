/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let arr = s.split("");
    arr.forEach(x => {
        if(x != ']') {
            stack.push(x);
        } else {
            let top = stack[stack.length - 1];
            let str = "";
            while(top != '[') {
                str = top + str;
                stack.pop();
                top = stack[stack.length - 1];
            }
            stack.pop();
            let numStr = "";
            top = stack[stack.length - 1];
            while(Number(top) || Number(top) === 0) {
                numStr = top + numStr;
                stack.pop();
                top = stack[stack.length - 1];
            }
            numStr = Number(numStr);
            while(numStr--) {
                stack.push(str);
            }
        }
    });
    return stack.join("");
};

console.log(decodeString("100[leetcode]"))