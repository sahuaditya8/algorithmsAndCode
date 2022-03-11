function primeFactors(num) {
    var factors = [];
    num.forEach(n => {
        let eachFactor = [];
        let divisor = 2;
        console.log(n);
        while (n > 2) {
            if (n % divisor == 0) {
                eachFactor.push(divisor);
                n = n / divisor;
            } else {
                divisor++;
            }
        }
        console.log(eachFactor);
        factors.push(eachFactor);
    });
    return factors;
}

let factor = primeFactors([33, 11, 69]);
console.log("Factors are: " + factor);