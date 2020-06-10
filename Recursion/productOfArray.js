//takes an array and returns the product of them all

//iteratively
function productOfArrayItr(arr){
  var mult = 1;

  for (let i = 0; i < arr.length; i++){
    mult = mult * arr[i];
  }
  return mult;
}

//recursive way
function productOfArray(arr){
  //base case
  if (arr.length === 0) return 1;
  //multiplying the array with cutting the first item off
  return arr[0] * productOfArray(arr.slice(1)); 
}
















//Test
console.log(productOfArray([1,2,3])); //6
console.log(productOfArray([1,2,3,10])); //60
