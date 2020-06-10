//write a function takes 2 strings as values that returns true
//if first string is a subset of second string
//the order is important
function isSubsequense(str1, str2){

  //define the begining indexes for str1 and 2
  let i = 0;
  let j = 0;

  //first case when the lenght of str1 is 0
  if (str1.length === 0) return true;

  while (j < str2.length){
    //if they are equal increment i
    if (str2[j] === str1[i]) i++;
    //it its the end of the str1 return true -- which means we have come to the end
    if (i === str1.length) return true;
    //increment j by 1 at each iteration
    j++;
  }
  //if j in str2 finishes before i in str1 return false
  return false;
}


//recursive way
function isSubsqR(str1, str2){
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if(str2[0] === str[1]) return isSubsqR(str1.slice(1), str2.slice(1));
  return isSubsqR(str1, str2.slice(1));
}













//Test
console.log(isSubsequense("hello", "hello world")); //true
console.log(isSubsequense("sing", "sting")); //true
console.log(isSubsequense("abc", "abracadabra")); //true
console.log(isSubsequense("abc", "acb")); //false (different order)
