//a function that takes an array and a callback function
//returns true if one of the items satisfies the callback function
function someRecursive(arr, callback){
  //edge case
  if (!arr.length) return false;

  //base case
  if (callback(arr[0])) return true;

  return someRecursive(arr.slice(1), callback)
}









//test
console.log(someRecursive([1,2,3,4], val => val % 2 !== 0)); // true
console.log(someRecursive([4,6,8], val => val % 2 !== 0)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false
