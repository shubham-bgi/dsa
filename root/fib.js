let prev = []
function fib(n) {
    let result;
    if(prev[n]) return prev[n];
    if(n <= 2) {
result = 1;
    } else {
        result = fib(n-1) + fib(n-2);
    }
    prev[n] = result;
    return result;
}

console.log(fib(500), JSON.stringify(prev));

