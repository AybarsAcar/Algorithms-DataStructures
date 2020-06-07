//using the buit in sort function to make numbers in ascending order
function numberCompare (n1, n2){
  return n1 - n2;
}

function descending (n1, n2){
  return n2 - n1;
}

console.log([2,14,4,145,12,45,1324,315,2453,1342,324].sort(numberCompare));
console.log([2,14,4,145,12,45,1324,315,2453,1342,324].sort(descending));


//sorting arrays by length
function sortLength (str1, str2){
  return str1.length - str2.length;
}
