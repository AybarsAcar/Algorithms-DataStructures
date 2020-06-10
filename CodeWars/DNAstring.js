//function returns the complementary side of the dna
//A <-> T
//G <-> C

function dnaStrand(dna){

  var comp = [];

  for (let char of dna){
    if (char === "A") comp.push("T");
    else if (char === "T") comp.push("A");
    else if (char === "G") comp.push("C");
    else if (char === "C") comp.push("G");
  }
  return comp.join("");
}

//my way shorter *******************************
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand1(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

//smarter way **********************
function DNAStrand2(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

//test
console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));
