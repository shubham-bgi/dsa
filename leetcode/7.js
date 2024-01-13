/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNeg = false;
    if(x < 0) {
        x *= -1;
        isNeg = true;
    }
    let i = 0;
    x = String(x);
    x = x.split("");
    while(i < x.length/2) {
        let temp = x[i];
        x[i] = x[x.length - i - 1];
        x[x.length - i - 1] = temp;
        i++;
    }
    x = x.join("");
    return isNeg ? -1 * Number(x) : Number(x);
};

console.log(reverse(123));