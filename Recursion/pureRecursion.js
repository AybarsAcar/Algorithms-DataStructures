//same example -- collecting the odd values into an array
function collectOddValues(arr){

  //defining new array each time which will be empty but we dont care
  let newArray = [];

  if (arr.length === 0) return newArray;

  if (arr[0] % 2 !== 0){
    newArray.push(arr[0]);
  }

  //we concactinate all the arrays at the end
  newArray = newArray.concat(collectOddValues(arr.slice(1)));
  return newArray;
}

//iterative version
function collectOddValuesI(arr){
  let oddValues = [];
  for (i = 0; i < arr.length; i ++){
    oddValues.push(arr[i]);
  }
}
