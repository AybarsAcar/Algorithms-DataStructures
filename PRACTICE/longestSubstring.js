//function accepts a string and returns the longest string with distinc characters
function findLongestSubstring(str){
  //declare
  let longest = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++){
    let char = str[i];

    if (seen[char]) start = Math.max(start, seen[char]);

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
console.log(seen);
console.log(longest);
  }

  return longest;
}



console.log(findLongestSubstring("helloworld"));
