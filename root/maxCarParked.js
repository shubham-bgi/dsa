//Variation of Overlapping Internal Given a few time slots like {{1012,1136} , {1137 , 1417} , {1015,1020}} 
// where 1012 means 10:12 find how many cars can be parked at the same time interval 
// Input arr = {{1012,1136} , {1137 , 1417} , {1015,1020}} Output : 2
//https://www.geeksforgeeks.org/count-maximum-number-of-cars-parked-at-the-same-time/
class Pair{
    constructor(time, isEntring) {
        this.time = time;
        this.isEntring = isEntring;
    }
}
function maxCarAtSameTime(intervals){
    const a = Array(2 * intervals.length);
    intervals.forEach((element, i)  => {
        a[2 * i] = new Pair(element[0], true);
        a[2 * i + 1] = new Pair(element[1], false);
    });
    a.sort((a, b) => a.time - b.time);
    let curMax = 0;
    let max = 0;
    a.forEach((car)=>{
        if(car.isEntring) {
            curMax++;
        }else{
            max = Math.max(curMax, max);
            curMax--;
        }
    })
    console.log(max);
}

maxCarAtSameTime([[1012,1136] , [1137 , 1417] , [1015,1050], [1020, 1125], [1040, 1500]])