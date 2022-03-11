function fibonacci(n) {
    var fibo = [0, 1];

    if (n <= 2) return 1;

    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[n];
}

function recursiveFibonacci(num) {
    if ( num <= 1) {
        return num;
    }
    else {
        return recursiveFibonacci(num-1) + recursiveFibonacci(num-2);
    }
}

let res = fibonacci(12);
console.log(res);

let result = recursiveFibonacci(12);
console.log(result);