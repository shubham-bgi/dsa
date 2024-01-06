/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = '';
    let i = 0;
    for(i = 0; i < word1.length; i++) {
        res += word1[i];
        if(word2[i]) res += word2[i];
    }
    while(i < word2.length) {
        res+=word2[i];
        i++;
    }
    return res;
};

console.log(mergeAlternately('ab','pqrs'));

console.log(mergeAlternately('am', 'asbne'));	
