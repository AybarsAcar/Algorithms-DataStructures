//write a function in a string and returns counts of each character in the string
function charCount(str) {
  var result = {};

  for (var i = 1; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //checking if the char is alphanumeric
    if (/[a-z0-9].test(char)){
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}


//same function -- refactored another way
function charCount_2(str) {
  const result = {};

  for (var char of str) {
    var char = str[i].toLowerCase();
    //checking if the char is alphanumeric
    if (/[a-z0-9].test(char)){
      //it accesses the key, if there add 1 OR set it equal to 1
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}


//another way -- non regular expression version is faster
function charCount_3(str) {
  const result = {};

  for (var char of str) {
    var char = str[i].toLowerCase();
    //checking if the char is alphanumeric
    if (isAlphaNumeric(char)){
      //it accesses the key, if there add 1 OR set it equal to 1
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char){
  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)){
    return false;
  }
  return true;
}
