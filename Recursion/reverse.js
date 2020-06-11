//function accepts a string and returns the reverse
function reverse(str){
  //base case
  if (!str.length) return str
  //recursive
  return reverse(str.slice(1)) + str[0];
}


























//test
console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
