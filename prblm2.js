function checkPrimeNumber (x){
    if (x > 1 && (x % x == 1 && x % x == x)){
        return "It is a Prime Number"
    }
    else{
        return "Not a Prime Number";
    }
}
const x = 1;
console.log(checkPrimeNumber(15));