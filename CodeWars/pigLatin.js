function pigIt(str) {
  let words = str.split(" ");
  let result = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i] === "!" || words[i] === "?") {
      result.push(words[i]);
    } else {
      result.push(words[i].substring(1) + words[i].substring(0, 1) + "ay");
    }
  }
  return result.join(" ")
}

console.log(pigIt("Hello World Mate !"));


//other methods
function pigIt_1(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}

pigIt_2 = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');

function pigIt_3(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

function pigIt_4(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
