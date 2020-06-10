//adds up all the numbers upto that point
function recursiveRange(num){
  if (num <= 0) return 0;
  return num + recursiveRange(num-1);
}






//iterative way
function recursiveRangeI(num){

  var total = 0;

  while (num > 0){
    total += num;
    num--;
  }
  return total;
}

console.log(recursiveRange(6)); //21
console.log(recursiveRange(10)); //55
