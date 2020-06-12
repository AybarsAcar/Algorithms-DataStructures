//function takes 2 strings as input
//returns a new sorted string with distinc letters
function longest(str1, str2){
  var result = [];

  for (let char of str1){
    if (!result.includes(char)) result.push(char);
  }
  for (let char of str2){
    if (!result.includes(char)) result.push(char);
  }
  return result.sort().join("");
}


console.log(longest("adsbsfaga", "gnsdlnblsjdinqa"));



//other solutions
const longest_1 = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function longest_2(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}


sa = "agdsgvaafwqasc"
sb = "asgqwafsagjnlsdv"

console.log(new Set(sa + sb));
