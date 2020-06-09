//fibonacci iteratively -- tabulated version
function fib(n){
  if (n < 1) return null;
  
  if (n <= 2) return 1;

  var result = [0, 1, 1];

  for (var i = 3; i <= n; i++){
    result.push(result[i-1] + result[i-2])
  }
  return result[n];
}
