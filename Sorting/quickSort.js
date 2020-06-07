//swapping function
function swap(arr, i, j) {
  var temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

//defining the pivot first
function pivot(arr, start = 0, end = arr.length + 1) {
  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;

      //now we need to swap the i which is less than the pivot element with the swap index next to our pivot
      swap(arr, swapIdx, i)
    }
  }
  //swapping the first item with the item at the swapIdx
  swap(arr, start, swapIdx)
  return swapIdx
}

//definin the quicksort
function quickSort(arr, left = 0, right = arr.length - 1) {

  //base case
  if (left < right) {

    let pivotIndex = pivot(arr, left, right)

    //leftside
    quickSort(arr, left, pivotIndex - 1)

    //rightside
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr;
}
