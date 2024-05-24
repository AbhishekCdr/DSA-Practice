// https://leetcode.com/problems/reverse-integer/

function reverseNumber(n) {
  let revNum = 0;

  while (n > 0) {
    let ld = n % 10;

    revNum = revNum * 10 + ld;

    n = Math.floor(n / 10);
  }

  return revNum;
}

console.log(reverseNumber(1231), "DIVIDE AND ADD");

//BAD APPROACH
const cun = 12345;
const str = String(cun);

console.log(Number(str.split("").reverse().join("")), "USING METHODS");
//Big O(logn + 1)

//FOR NEGATIVE NUMBERS
var reverse = function (x) {
  let isNegative = false;

  if (x < 0) {
    isNegative = true;
    x *= -1;
  }

  let revNum = 0;

  while (x > 0) {
    let ld = x % 10;

    revNum = revNum * 10 + ld;

    x = Math.floor(x / 10);
  }

  return isNegative ? -revNum : revNum;
};
