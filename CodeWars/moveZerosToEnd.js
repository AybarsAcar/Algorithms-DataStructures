//write a function that takes an array
//and moves all the zeros to the end
function moveZeros(arr){
  let zeros = [];
  let temp = [];

  for (var i in arr){
    if (arr[i] === 0) zeros.push(arr[i]);
    else temp.push(arr[i]);
  }
  for (let i in zeros){
    temp.push(zeros[i]);
  }
  return temp;
}


console.log(moveZeros([12,2,356,0,54,0,85,0,5967,56,0]));
console.log(["hey",315,436,43,0,4,"lel",3,0,2,4,0,756,3]);


//other solutions
const moveZeros_1 = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}
