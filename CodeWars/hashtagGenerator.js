function generateHashtag(str) {
  if (str === "" || !str.replace(/\s/g, '').length) return false

  let words = str.split(/\s+/);
  let result = [];

  result.push("#" + words[0][0].toUpperCase() + words[0].substring(1));

  for (let i = 1; i < words.length; i++) {
    result.push(words[i][0].toUpperCase() + words[i].substring(1));
  }
  if (result.join("").length > 140) return false;
  return result.join("")
}


console.log(generateHashtag("Hello world    mate !"));


//other  solutions
//swap the hard coded white space with
function generateHashtag_1 (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
