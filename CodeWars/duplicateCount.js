//counts the duplicate values and returns the amount
//case insensitive

function duplicateCount(str){
  var letters = {};
  var count = 0;

  for (let char of str){
    char = char.toLowerCase();
    !letters[char] ? letters[char] = 1 : letters[char]++;
  }
  for (let key in letters){
    if (letters[key] > 1) count++;
  }
  return count;
}









console.log(""); //0
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2
