//Anagram Challenge
function anagram(str1, str2){
  if (str1.length !== str2.length){
    return false;
  }
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    //check if letter exists, if is does add, if not set it to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0); i<str2.length; i++){
    let letter = str2[i];
    //cant find it in the object we created in the first loop then not an Anagram
    if (!lookup[letter]){
      return false
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
