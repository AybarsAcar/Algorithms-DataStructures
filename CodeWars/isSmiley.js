function countSmileys(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i][0] === ":" || arr[i][0] === ";"){
      if (arr[i][1] === ")" || arr[i][1] === "D"){
        count++
      } else if (arr[i][1] === "-" || arr[i][1] === "~"){
        if (arr[i][2] === ")" || arr[i][2] === "D") count++;
      }
    }
  }
  return count;
}


console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));


//other solutions
function countSmileys_1(arr) {
  let smileys = 0;
  let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      smileys++;
    }
  }
  return smileys;
}

//good practice
function countSmileys_2(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
