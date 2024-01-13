/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let pointer = 0;
    let count = 0;
    for(let i = 0; i < chars.length; i++) {
        if(chars[pointer] == chars[i]) {
            count++;
            continue;
        } else {
            if(count != 1) {
                count = '' + count;
                count = count.split('');
                count.forEach(num=> {
                    chars[++pointer] = num;
                });
            }
            chars[++pointer] = chars[i];
            count = 1;
        }
    }

    if(count != 1) {
        count = '' + count;
        count = count.split('');
        count.forEach(num=> {
            chars[++pointer] = num;
        });
    }
    return pointer + 1;
};
let chars = ["a","a","b","b","c","c","c"];
console.log(compress(chars));
console.log(chars);