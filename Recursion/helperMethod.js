//collect the odd values in an array
function collectOddValues(arr){

  let result = [];

  function helper(helperInput){

    //base case
    if (helperInput.length === 0){
      return;
    }

    //otherwise
    if(helperInput[0] % 2 !== 0){
      result.push(helperInput[0]);
    }

    //now run it again in a sub array sliced from index 1 which get rid of the first element of the original array where the index is 0
    helper(helperInput.slice(1));
  }
  //calling the helper on array
  helper(arr);
  //returning the results array
  return result;
}

//you can loop thru the elements and push without to the resuls without recursion
