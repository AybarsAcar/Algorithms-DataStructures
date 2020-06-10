//given an array of integers
//function that returns the max sum of the consecutive elements given the numbers

//Naive version -- nested loop
function maxSubArray_(arr, num){
  if (num > arr.length) return null;

  var max = -Infinity;

  for (i = 0; i < arr.length - num - 1; i++){
    var temp = 0;
    for (j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max){
      max = temp;
    }
  }
  return max;
}

//sliding window approach
function maxSubArray(arr, num){

  //declare the maxSum and tempSum variables
  var maxSum = 0;
  var tempSum = 0;

  //edgecase
  if (num > arr.length) return null

  //now create the first sum from index0 to n
  for (i = 0; i < num; i++){
    maxSum += arr[i];
  }

  //setting the first sum to maximum
  tempSum = maxSum;

  //for each loop we add the number at index i and subtract the index (i-num)
  for (i = num; i < arr.length; i++){
    tempSum = tempSum + arr[i] - arr[i - num];

    //set the maxSum equal to tempSum if it is larger than the maxSUm
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}























//Test
console.log(maxSubArray([100,200,300,400], 2)); //returns 700
console.log(maxSubArray([1,4,2,10,23,3,1,0,20], 4)); //returns 39
console.log(maxSubArray([-3,4,0,-2,6,-1], 2)); //returns 5
console.log(maxSubArray([3,-2,7,-4,1,-1,4,-2,1], 2)); //returns 5
console.log(maxSubArray([2,3], 3)); //returns null
