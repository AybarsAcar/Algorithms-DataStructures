//the following functions gives, if there are any duplicate arguements
//passed in an array

function areThereDuplicates(...args){

  //set an object to keep track of the values
  let collection = {};

  //loop over the arguements and put in the object
  for (let val in args){
    collection[args[val]] = (collection[args[val]] || 0) + 1;
  }

  //loop through the collecion now
  for (let key in collection){
    if (collection[key] > 1) return true;
  }

  //otherwise
  return false;
}













//Test
console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates("a","b","c"));
console.log(areThereDuplicates("a","b","b"));
console.log(areThereDuplicates(1,2,3,4,5,6,7,89,4,6));
