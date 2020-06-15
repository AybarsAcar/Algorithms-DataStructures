//write a function that returns the permutation of string
//it is a recursive function

function permutations(string) {
  let results = [];

  if (!string || typeof string !== "string"){
    return "Not A String";
  } else if (string.length < 2 ){
    results.push(string)
    return results;
  }

  for (let i = 0; i < string.length; i++){
    let char = string[i];

    //to remove duplication
    if (string.indexOf(char) !== i) continue;

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of permutations(remainingChars)){
      results.push(char + permutation) }
  }
  return results;
}


console.log(permutations("a"));


//other solutions
function permutations_1(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}

function permutations_2(str) {
 return (str.length <= 1) ? [str] :
         Array.from(new Set(
           str.split('')
              .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
              .reduce((r, x) => r.concat(x), [])
         ));
}

//other solution
const unique = xs => [ ...new Set(xs) ]
const concat = (a, b) => [ ...a, ...b ]
const drop = i => xs => [ ...xs.slice(0, i), ...xs.slice(i + 1) ]

const permute = (x, i, xs) =>
  combinations(drop(i)(xs)).map(y => x + y)

const combinations = s =>
  s.length === 1 ? [ s ] : [ ...s ].map(permute).reduce(concat)

const permutations_3 = s => unique(combinations(s))
