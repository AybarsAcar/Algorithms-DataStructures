//function that acceps an array of positive integers and a positive int
//returns the minlen of the contiguous subarray which sum is greater than or equal to the num

function minSubArrayLen(arr, num){
  //define variables
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length){

    //when total is less then the num increase end and add it to the total
    if (total < num && end < arr.length){
      total += arr[end];
      end++;

    //when total is larger than the num start looping from the next start and subtract the previous start from the total
    } else if (total >= num){
      minLen = Math.min(minLen, (end - start));
      total -= arr[start];
      start++;

      //need to break because
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0: minLen;
}



//test
console.log(minSubArrayLen([1,2,3,4,5], 200));
console.log(minSubArrayLen([5,2,3,1,6], 7));
console.log(minSubArrayLen([1,2,20,4,10], 20));
