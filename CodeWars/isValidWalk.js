//function that returns true if you walk back your location in 10 steps
//city a perfect grid

function isValidWalk(arr){
  var dx = 0;
  var dy = 0;

  if (arr.length !== 10) return false;

  for (let i = 0; i < arr.length; i++){
    switch (arr[i]) {
      case "n": dy--; break
      case "s": dy++; break
      case "e": dx++; break
      case "w": dx--; break
    }
  }

  if (dx === 0 && dy === 0) return true;
  return false;
}








//test
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); //'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); //'should return false');
console.log(isValidWalk(['w'])); //'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); //'should return false');
