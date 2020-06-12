//hides the digits with # sign upto last 4 digits
function maskify(str){
  var str2 = [];

  for (let char of str.slice(0, -4)) {
    char = "#"
    str2.push(char);
  }
  for (let char of str.slice(-4)) str2.push(char);
  return str2.join("");
}




console.log(maskify("213461526262"));



function maskify_(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
