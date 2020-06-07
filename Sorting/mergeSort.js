//merge function
function merge(arr1, arr2){
  var results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length){
    if (arr1[i] < arr2[j]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  //this while loop allows us to put rest of the values once one of the arrays are exhausted
  while (i < arr1.length){
    results.push(arr[i]);
    i++;
  }
  while (j < arr2.length){
    results.push(arr[j]);
    j++;
  }

  return results;
}

//splitting then calling the merging
function mergeSort(arr){
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let righ = mergeSort(arr.slice(mid));
  return merge(left, right);
}
