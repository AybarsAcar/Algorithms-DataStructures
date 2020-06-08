//this is used for string inputs
//not a good hash function because O(n)
function hash(key, arrayLen){
  let total = 0;

  for (var char of key){
    let val = char.charCodeAt(0) - 96;
    total = (total + val) % arrayLen;
  }
  return total;
}


//update it
function hash_(key, arrayLen){
  let total = 0;
  const prime = 31;
  for (var i = 0; Math.min(key.length, 100); i++){
    let char = key[i];
    let val = char.charCodeAt(0) - 96;
    total = (total * prime + val) % arrayLen
  }
  return total;
}
