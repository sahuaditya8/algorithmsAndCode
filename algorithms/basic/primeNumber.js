function isPrime(n) {
    let divisor = 2;

    while (n > divisor) {
        if (n % 2 == 0) {
            return false;
        } else {
            divisor++;
        }
        return true;
    }
}

console.log(isPrime(33));