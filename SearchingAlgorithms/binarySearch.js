//an algorithm that returns a value binary search
function binarySearch(arr, n) {
  var left = 0;
  var right = arr.length - 1;
  var middle = Math.floor((left + right) / 2);

  while (arr[middle] !== n && left <= right) {
    if (n < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    //update the middle after every iteration
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] == n) return middle;

  //return this if the conditional statements dont satisfy
  // -1 indicates that the element is NOT in the array
  return -1;
}


console.log(binarySearch([1, 2, 3, 45, 346, 2377, 5757, 124235, 1224346], 100));
