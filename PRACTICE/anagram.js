function anagram(str1, str2) {

  //first case
  if (str1.length !== str2.length) return false;

  //create an object to track the occurances
  var letters = {};

  //loop over str1 and add the characters to the object
  for (let char of str1) {

    if (letters[char]) {letters[char] += 1;
    } else {
      letters[char] = 1;
    }
  }

  //loop over the second string to see if the characters match
  for (let char of str2) {

    if (!letters[char]) {
      return false;
    } else {
      letters[char] -= 1;
    }
  }
  return true;
}



//Test

console.log(anagram("aaabbb", "ababab"));
console.log(anagram("hello world", "olle hwoldr"));
console.log(anagram("abcdefg !", "a dc!begf"));
console.log(anagram("agsgsbaf", "adssfgae"));
