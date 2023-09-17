arr = [2, 5, 10 , 90, 1110, 1119, 1345, 1390, 1982, 1999,4023, 5000];
item = 1;

function binarySearch(low = 0, high = arr.length - 1) {
    if(high < low) return -1;
    let mid = Math.floor((high + low ) /2);

    if(arr[mid] === item) {
        return mid;
    }

    if(arr[mid] < item) return binarySearch(mid+1, high);
    if(arr[mid] > item) return binarySearch(low, mid - 1);


}

console.log(binarySearch())