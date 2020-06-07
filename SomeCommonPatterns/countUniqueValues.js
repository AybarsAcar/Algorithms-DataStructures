//countUniqueValues Challenge
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  i = 0;
  j = 1;
  for (var j=1; j < arr.length; j++){
    if (arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}


//this only works for sorted arrays
//is the given array is not sorted sort it first
console.log(countUniqueValues([1,1,2,3,4,4,4,4,5,5,6,7,7,7,8,9,10,11,11,11,11,11,12,13,14]));
console.log(countUniqueValues([]));
