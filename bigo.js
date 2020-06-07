const {performance} = require('perf_hooks');

//return a total of all the numbers up to n
function addUpTo(n){
  let total = 0;
  for (var i=0; i <=n; i++){
    total += i
  }
  return total;
}


//same function -- comes from a mathematical function, this one is faster
function addUpto_(n){
  return n * (n+1) /2;
}

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1)/1000} seconds`);

let t3 = performance.now();
addUpto_(100000000);
let t4 = performance.now();
console.log(`Time Elapsed2: ${(t4-t3)/1000} seconds`);
