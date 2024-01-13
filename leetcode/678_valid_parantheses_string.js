/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let leftMax = 0;
    let leftMin = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(': 
            leftMin += 1;
            leftMax += 1;
                break;
            case ')': 
            leftMin -= 1;
            leftMax -= 1;
                break;
            case '*': 
                leftMin -= 1;
                leftMax += 1;
                break;
        }
        if(leftMax < 0) return false;
        if(leftMin < 0) leftMin = 0;
    }

    return leftMin == 0;
};

checkValidString("(((((*(((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())")