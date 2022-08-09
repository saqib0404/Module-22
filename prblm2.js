function findPrimeNumber (x){
    if (x < 2){
        return false;
    }
    let isPrime = true;
    for (let i = 2; i < x;i++) {
        if (x % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
console.log(findPrimeNumber(7));