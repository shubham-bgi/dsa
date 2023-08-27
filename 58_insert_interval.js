/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // if it is ahead of every interval
    let n = intervals.length
    if(!intervals.length) return [newInterval];
    if(intervals[n-1][1] < newInterval[0]) {
        intervals.push(newInterval)
        return intervals;
    }
    if(intervals[n-1][1] == newInterval[0]) {
        intervals[n-1][1] = newInterval[1]
        return intervals;
    }
    let flag = false;
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];

        // new interval is ahead
        if(newInterval[0] > interval[1]) continue;

        // new interval got behind
        if(newInterval[1] < interval[0]) {
            if(!flag) intervals.splice(i, 0, newInterval);
            break;
        }

        // new interval completely overlaps 
        if(newInterval[0] <= interval[0] && newInterval[1] >= interval[1]) {
            if(1 === intervals.length) {
                intervals.splice(i, 1, newInterval);
                break;
            } else {
                intervals.splice(i, 1);
                i--;
                continue;
            }
        }

        //gets overlapped
        if(newInterval[0] >= interval[0] && newInterval[1] <= interval[1]) {
            break;
        }

        //partial overlaps first
        if(newInterval[0] >= interval[0] && newInterval[0] <= interval[1]) {
            flag = true;
            interval[1] = newInterval[1];
        }

        //partial overlaps second
        else if(newInterval[1] >= interval[0] && newInterval[1] <= interval[1]) {
            if(intervals[i - 1]) {
            intervals[i-1][1] = intervals[i][1]
            intervals.splice(i, 1);
            break;
            } else {
                interval[0] = newInterval[0];
                break;
            }
        }
    }
    return intervals;
};
let intervals = [[0,7],[8,8],[9,11]];
let newInterval = [4,13];
console.log(insert(intervals,  newInterval))