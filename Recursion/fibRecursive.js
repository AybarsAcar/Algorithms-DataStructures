//fibonacci seq recursively
function fibonacci(num){
  //edge case
  if (num <= 0) return null;

  //base case
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}


//very inefficient and exponential time complexity
//use the iterative way or dynamic programming
