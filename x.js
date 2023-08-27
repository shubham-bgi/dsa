
var isPalindrome = function(x) {
    x = '' + x;
    for(let i = 0; i < x.length/2; i++) {
        if(x[x.length - i - 1] != x[i]) return false
    }
    return true
};
console.log(isPalindrome(121))