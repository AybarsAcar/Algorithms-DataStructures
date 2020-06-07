//simple linear search, arguements array and a number
function isInThere(arr, n){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === n) return i;
  }
 return -1;
}

console.log(isInThere([1,2,3,5,1324,13542,13,4], 45));
