//return the sqroot of a number floored
//by not using Math lib
//any input [9, 15] returns 3

function sqrrtFloor(n){

  if (n < 0) return Error("value less than 0");
  if (n === 1) return 1;

  for (var i = 0; i <= n/2; i++){
    if (i * i === n) return i;
    else if (i * i > n) return i-1;
  }
  return i;
}












//Testing
console.log(sqrrtFloor(-1));
console.log(sqrrtFloor(0));
console.log(sqrrtFloor(1));
console.log(sqrrtFloor(2));
console.log(sqrrtFloor(4));
console.log(sqrrtFloor(9));
console.log(sqrrtFloor(12));
console.log(sqrrtFloor(15));
console.log(sqrrtFloor(17));
console.log(sqrrtFloor(10000000));
console.log(Math.sqrt(10000000));
