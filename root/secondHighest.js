let arr = [101,0,100, -1, 0.2, 1.9, 1.99, 3, 98];
let highest = -Infinity;
let secondHighest = -Infinity;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > highest) {
        secondHighest = highest;
        highest = arr[i];
    } else if(arr[i] > secondHighest) {
        secondHighest = arr[i];
    }
}

console.log(secondHighest, highest);