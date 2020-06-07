//getting the digit helper method
function getDigit(num, place){
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10);
}

//getting the number of digits
function digitCount(num){
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//returning the max number of digits
function mostDigits(arr){
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}


//radix sort
function radixSort(arr){
  var maxDigitsCount = mostDigits(arr);

  for (var k = 0; k < maxDigitsCount; k++){

    //creating and array of 10 empty arrays, now we have 10 buckets
    let digitBuckets = Array.from({length: 10}, () => []);
    for (var i = 0; i < arr.length; i++){

      // we are sorting them based on the digit into the buckets
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }

    //now we need to put the arrays together in the large loop concatanate
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log(radixSort([134,1,2345,1325,12,3,7458,578,3,463574,74524,246]));
