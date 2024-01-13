/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length != word2.length) return false;
    function occurrence(word){
        let obj = {};
        word.forEach(alpha => {
            if(obj[alpha]) obj[alpha]++;
            else obj[alpha] = 1;
        })
        return obj;
    }
    let word1Obj = occurrence(word1.split(''));
    let word2Obj = occurrence(word2.split(''));
    for (let key in word1Obj) {
        if(!word2Obj[key]) return false;
        let flag = 0;
        for (let key2 in word2Obj) {
            if(word1Obj[key] == word2Obj[key2]) {
                flag = 1;
                word2Obj[key2] = -1;
                break;
            }
        }
        if(!flag) return false;
    }
    return true;
};

console.log(closeStrings('abc', 'bca'))





// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {boolean}
//  */
// var closeStrings = function(word1, word2) {
//     if(word1.length != word2.length) return false;
//     function occurrence(word){
//         let obj = {};
//         word = typeof word == 'string' ? word.split('') : word;
//         word.forEach(alpha => {
//             if(obj[alpha]) obj[alpha]++;
//             else obj[alpha] = 1;
//         })
//         return obj;
//     }
//     let word1Obj = occurrence(word1);
//     let word2Obj = occurrence(word2);
//     let word1Arr = Object.keys(word1Obj);
//     let word2Arr = Object.keys(word2Obj);
//     if(!word2Arr.every(x => word1Obj[x])) return false;
//     if(!word1Arr.every(x => word2Obj[x])) return false;
//     let obj1 = occurrence(Object.values(word1Obj));
//     let obj2 = occurrence(Object.values(word2Obj));
//     for (let key in obj2) {
//         if(obj2[key] != obj1[key]) return false;
//     }
//     return true;
// };

// console.log(closeStrings('aw', 'aa'))