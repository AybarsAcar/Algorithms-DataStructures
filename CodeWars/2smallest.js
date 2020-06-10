//function returns the sum of 2 smallest
function sumTwoSmallestNumbers(arr){
  var sum = Infinity;

  for (i = 0; i < arr.length; i++){
    for (j = i + 1; j < arr.length; j ++){
      var tempSum = arr[i] + arr[j];
      if (tempSum < sum) sum = tempSum;
    }
  }
  return sum;
}







//Test
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
