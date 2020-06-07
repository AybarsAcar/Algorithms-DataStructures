
function naiveStringSearch(str, pattern) {

  var count = 0

  for (i = 0; i < str.length; i ++) {
    for (j = 0; j < pattern.length; j ++){
      //console.log(str[i], pattern[j]);
      if (pattern[j] !== str[i+j]) {
        //console.log("BREAK");
        break;
      }
      if (j === pattern.length - 1){
        //console.log("FOUND ONE");
        count ++;
      }
    }
  }
  return count;
}










console.log(naiveStringSearch("lorie loled", "lol"));
