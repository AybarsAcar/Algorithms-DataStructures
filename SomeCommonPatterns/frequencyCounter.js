//write a function called same, which accepts two arrays. the function should return true if every value in the array has its corresponding value squared in the second array. the frequency of the values must be the same

//naive solution -- nested loop
function same(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false:
  }
  for (let i = 0; i<arr1.length; i++){
    //index of literally loops over the entire array
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    //shrinks the array as it finds the squared of i in arr1
    arr2.splice(correctIndex, 1)
  }
  return true
}

//Frequency Counter
function same_(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (var val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (var val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}
