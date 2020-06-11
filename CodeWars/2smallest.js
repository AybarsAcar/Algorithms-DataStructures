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

//Better O(n)
function sumTwoSmallestNumbers2(numbers) {
  var min = Infinity;
  var secondMin = Infinity;

  var n;
  for (i = 0; i < numbers.length; i++) {
    n = numbers[i];
    if(n < min) {
      secondMin = min;
      min = n;
    } else if( n < secondMin ) {
      secondMin = n;
    }
  }

  return min + secondMin;
}

//O(n) with sorting first
function sumTwoSmallestNumbers3(arr){
  var [a, b] = arr.sort((a, b) => a - b)
  return a + b;
}

function sumTwoSmallestNumbers4(arr){
  var newArr = arr.sort((a, b) => a - b);
  return newArr[0] + newArr[1]
}



//Test
console.log(sumTwoSmallestNumbers4([5, 8, 12, 19, 22]));
