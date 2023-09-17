/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let l = 0;
    let r = 0;
    let max = 0;
    while (r < s.length) {
        if(set.has(s[r])) {
            while(s[l] != s[r]) {
                set.delete(s[l]);
                l++;
            }
            set.delete(s[l]);
            l++;
        } else {
            set.add(s[r])
            max = Math.max(max, r-l + 1);
            r++;
        }
    }
    return max;
};



// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(str) {
//     var l =0;
//     var r=0;
//     let map = new Map();
//     var max = -Infinity;
//     let start;
//     let end;
//     var newStr=[];
//     while(r<str.length){
//         if(map.has(str[r])){
//             while(str[l]!=str[r]){
//                 map.delete(str[l]);
//                 l++;
//             }
//             map.delete(str[l]);
//             l++;
//         }else{
//             map.set(str[r]);
//             if(max<r-l+1){
//                 start = l;
//                 end = r;
//                 max = r-l+1;
//             }
//             r++;
//         }
//     }
//     for(var i=start;i<=end;i++){
//         newStr.push(str[i]);
//     }
//     return {'max':max,'string':newStr.join('')};
// };

console.log(lengthOfLongestSubstring("abcabcbb"))
