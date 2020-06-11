//palindrome -- reads the same forward and backward
function isPalindrome(str){
  let reverseStr = reverse(str);
  return reverseStr === str;
}

function reverse(str){
  if (!str.length) return str;
  return reverse(str.slice(1)) + str[0];
}

//test
console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat")); //true
console.log(isPalindrome("amanaplanacanalpanama")); //true
console.log(isPalindrome("amanaplanacanalpandemonium"));


//another way
function isPalindrome_(str){
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  //negative index is used to describe an offset -1 returns the last item, -2 last 2 etc
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
}
