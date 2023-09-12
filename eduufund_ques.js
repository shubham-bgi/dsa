/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    //loop outter i
    //loop inner j 
    // [1,5] [0,2]
    // 0 > 5 case when not overlapping, take the ahead one, j++
    // 2 < 1 case when not overlapping, take the ahead one, i++
    // 2 >= 1 [1,2]
    let i = 0;
    let j = 0;
    let output = [];
    while (i < firstList.length && j < secondList.length) {
        let first = firstList[i];
        let second = secondList[j];
        if(first[0] > second[1]) {
            j++;
            continue;
        }
        if(second[0] > first[1]) {
            i++;
            continue;
        }
        if(first[1] > second[1] && first[0] < second[0]) {
            output.push([second[0], second[1]]);
            j++;
            continue;
        }
        if(first[1] < second[1] && first[0] < second[0]) {
            output.push([first[0], first[1]]);
            i++;
            continue;
        }
        if(second[1] >= first[1] && second[0] >= first[0]) {
            output.push([second[0], first[1]]);
            i++;
        } else {
            output.push([first[0], second[1]]);     
            j++;   
        }
    }
    return output;
};

let firstList = [[3,5],[9,20]];
let secondList = [[4,5],[7,10],[11,12],[14,15],[16,20]];
console.log(intervalIntersection(firstList, secondList))