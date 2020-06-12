//function that takes 2 arrays as an input
//returns an array of the difference
function arrayDiff(arr1, arr2) {
  const diff = [];
  for (var i in arr1) {
    if (!arr2.includes(arr1[i])) diff.push(arr1[i]);
  }
  return diff
}


//test
console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));



//other solutions
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff2(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}


//or you can use the difference method included in lodash library
const array_diff3 = require("lodash").difference;
