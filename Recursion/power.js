//mimics the Math.pow() function
//takes 2 inputs and returns the power

function power(b, e){

  if (e === 0) return 1;

  e--;
  return b * power(b, e);
}















//Test
console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4)); // 16
