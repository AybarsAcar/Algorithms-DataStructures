//function to see if the digits of given 2 integers are the same
function sameDigits(num1, num2) {

  //define 2 numbers as strings
  var strNum1 = num1.toString();
  var strNum2 = num2.toString();

  //you dont need this line but it saves time if the length is different
  if (strNum1.length !== strNum2.length) return false;

  var counter = {};

  //loop over the digits and add them on the object
  for (num of strNum1) {
    (counter[num]) ? counter[num] += 1: counter[num] = 1;
  }

  //loop over the second integers digits
  for (num of strNum2) {
    if (!counter[num]) {
      return false
    } else{
      counter[num] -= 1;
    }
  }
  return true;
}









//Testing
console.log(sameDigits(12345612443, 52341632144));
console.log(sameDigits(182, 281));
console.log(sameDigits(34, 14));
console.log(sameDigits(22, 222));
