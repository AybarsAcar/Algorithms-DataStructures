//is the given number n a prime number
function isPrimeNumber(n){
  if (n < 0) return undefined;
  if (n === 1) return false;
  if (n === 2) return true;

  for (var i = 2; i < n; i++){
    if (n % i === 0) return false;
    return true;
  }
}



//Testing
console.log(isPrimeNumber(-5));
console.log(isPrimeNumber(0));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(9));
console.log(isPrimeNumber(25));
console.log(isPrimeNumber(58));
console.log(isPrimeNumber(4871));
