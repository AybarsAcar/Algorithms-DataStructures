function fib(n, memo = []){
  //if the fib of n is in the array return the array dont calculate again
  if (memo[n] !== undefined) return memo[n];

  //base case
  if (n <= 2) return 1;

  //the recursive call
  var result = fib(n-1, memo) + fib(n-2, memo)

  //we store it at index n in our memo array -- memo for memory
  memo[n] = result;

  return result;
}
