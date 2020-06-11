//this function capitilise every first letter in an array
function capitiliseFirstI(arr){

  let newArr = [];

  for (var i = 0; i < arr.length; i++){

    var string = arr[i];

    newArr.push(string.charAt(0).toUpperCase() + string.slice(1));
  }
  return newArr;
}


console.log(capitiliseFirstI(["car", "taco", "banana"]));


//recursively
function capitiliseFirst(arr){
  //base case
  if (arr.length === 0) return arr;

  return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)].concat(capitiliseFirst(arr.slice(1)))
}

console.log(capitiliseFirst(["car", "taco", "banana"]));
