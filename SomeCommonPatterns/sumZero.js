//sumZero Challenge
function sumZero(arr){
  for (var i; i < arr.length; i ++) {
    for (var j = i+1; j < arr.length; i ++){
      if (arr[i] + arr[j] === 0){
        return [arr[i], arr[j]]
      }
    }
  }
}

//multiple pointers approach
function sumZero_(arr){
  let left = 0;
  let right = arr.length - 1; //last item of the array
  // it has to be less than because eventually they meet and we want it to fail
  while (left < right){
    let sum = arr[left] + arr[right];
    if (sum === 0){
      return [arr[left], arr[right]];
    } else if (sum > 0){
      right --;
    }
  } else {
    left ++;
  }
}
