//Countdown
function countdown(n){
  if (n <= 0){
    console.log("All done!");
    return;
  }
  console.log(n);
  n --;
  countdown(n);
}




//iterative way
function countdownI(n){
  for (var i = n; i > 0; i --){
    console.log(i);
  }
  console.log("All done!");
}


//sumRange example
function sumRange(n){
  if (n === 1) return 1;
  return n + sumRange(n-1);
}

//sumRange iterative
function sumRangeI(n){
  total = 0;
  for (var i = n; i > 0; i--){
    total += i;
  }
  return total;
}

//factorial recursive
function factorial(n){
  if (n === 0) return 1;
  return n * factorial(n-1)
}


//factorial iterative way
function factorialI(n){
  total = 1;
  for (var i = n; i > 0; i--){
    total *= i;
  }
  return total;
}
