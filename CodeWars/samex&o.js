//returns true if the number of x's and o's in a string are the same
function XO(str){
  var letters = {};

  for (char of str){
    char = char.toLowerCase();
    (!letters[char]) ? letters[char] = 1 : letters[char]++;
  }
  return letters.x === letters.o;
}











console.log(XO("xo")); //true
console.log(XO("xxOo")); //true
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("OOmasgsngXx")); //true



//other ways

const XO_1 = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
