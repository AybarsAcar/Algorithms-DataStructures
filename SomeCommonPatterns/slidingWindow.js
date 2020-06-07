//maxSubarraySum Challenge
//naive version
function maxSubarraySum(arr, num) {
  //edge case
  if (num > arr.length) return null;

  var max = -Infinity;

  for (var i = 0; i < arr.length - num - 1; i ++){
    temp = 0;
    for (var j = 0; j < num; j ++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;

}

//sliding window
function maxSubarraySum_(arr, num){
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) retun null;

  //creating the first sum
  for (var i=0; i < num; i ++){
    maxSum += arr[i];
  }

  //set this first sum to maxsum
  tempSum = maxSum;

  //now start your loop at arr[num] and add the first in and subtract the first item
  for (var i = num; i < arr.length; i ++) {
    tempSum = tempSum -  arr[i - num] + arr[i];

    //updatind the maxSum, you can use an if else statement like above same thing
    maxSum = Math.max(maxSum, tempSum);
  }
  retun maxSum;
}
