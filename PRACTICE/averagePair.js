//function that gives true or false if the is any pair that its average is
//equal to the given integer

//Naive Solution (nester Loop) -- quadratic time complexity
function averagePair_(arr, num) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === num) return true;
    }
  }
  return false;
}

//Multiple Pointers (we need sorted array for this) -- linear time complexity
function averagePair(arr, num) {

  //start 2 pointers, 1 at the beginning one at the end
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;

    if (avg === num) return true;
    else if (avg > num) right--;
    else left++;

  }
  return false
}









//Test
console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
