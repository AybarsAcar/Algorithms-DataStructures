//swapping function
function swap(arr, i, j) {
  var temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

//bubble sort
function bubbleSort(arr);

for (var i = arr.length - 1; i >= 0; i--) {
  for (var j = 0; j < i - 1; j++) {
    if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
  }
  return arr;
}

//bubble sort slower way -- not optimised
function bubbleSortS(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length: j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
}

//bubble sort optimised for nearly sorted arrays
function bubbleSortOpt(arr) {
  //keep track of the swaps so we dont check if there was no swap
  var noSwap;

  for (var i = arr.length - 1; i >= 0; i--) {
    noSwap = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    return arr;
  }
