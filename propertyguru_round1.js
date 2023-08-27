function adjacent(arr, letter) {
    let row = -1;
    let col = -1;
    let output = '';

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++){
            if(letter == arr[i][j]) {
                row = i;
                col = j;
                break;
            }
        }
        if(row != -1) break;
    }
    if(row == -1) return output;

    output += arr[row-1]?.[col-1] || '';
    output += arr[row-1]?.[col] || '';
    output += arr[row-1]?.[col+1] || '';
    output += arr[row]?.[col-1] || '';
    output += arr[row]?.[col+1] || '';
    output += arr[row+1]?.[col-1] || '';
    output += arr[row+1]?.[col] || '';
    output += arr[row+1]?.[col+1] || '';
    return output;
}

const res = adjacent([['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H'], ['I', 'J', 'K', 'L'], ['M', 'N', 'O', 'P']], 'P');
console.log(res);