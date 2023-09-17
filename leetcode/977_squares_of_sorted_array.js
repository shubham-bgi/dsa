/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let p1 = nums.length;
    let output = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= 0) {
            p1 = i;
            break;
        }
    }

    let p2 = p1 - 1;
    while(p2 >= 0 || p1 < nums.length) {
        let nump2 = p2 >= 0 ? nums[p2] * nums[p2] : -1;
        let nump1 = p1 < nums.length ? nums[p1] * nums[p1] : -1; 

        if(nump1 != -1 && nump2 != -1) {
            if(nump1 > nump2) {
                output.push(nump2);
                p2--;
            } else {
                output.push(nump1);
                p1++;
            }
        } else if(nump1 != -1) {
            output.push(nump1);
            p1++;
        } else if(nump2 != -1) {
            output.push(nump2);
            p2--;
        }
    }
    return output;
};

console.log(sortedSquares([-7,-3,2,3,11]))