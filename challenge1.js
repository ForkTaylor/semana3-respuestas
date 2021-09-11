function countPrimes(number) {
    //Implementación

    let primes = [];

    let store = [];

    for (i = 2; i <= number; i++) {
        
        if (!store[i]) {
            primes.push(i);
            for (j = i < 1; j <= number; j += i) {
                store[j] = true;
            }
        }
    }
    console.log(primes, store);

    return primes.length;

}


countPrimes(10)



module.exports = countPrimes;