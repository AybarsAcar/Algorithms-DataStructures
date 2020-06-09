//turning integers to bits
//and returning the sum
function countBits(n){
  var count = 0;

  while (n > 0) {
    if (n % 2 === 1){
      count++;
    }
    n = Math.floor(n/2);
  }
  return count;
}


console.log(countBits(10));
