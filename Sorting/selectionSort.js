//swapping function
function swap(arr, i, j) {
  var temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

//selection sorted
function selectionSort(arr){
  for (var i = 0; i < arr.length; i ++){
    var lowest = i;
    for (var j = i+1; j < arr.length; j ++){
      if (arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([1,33,436,23,2,43,67,4323,54,12532,643235,15135,]));
