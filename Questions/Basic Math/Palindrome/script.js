function palindromeNum(n) {
  let dup = n;
  let revNum = 0;

  while (n > 0) {
    let ld = n % 10;

    revNum = revNum * 10 + ld;

    n = Math.floor(n / 10);
  }

  return revNum === dup;
}

console.log(palindromeNum(1231), "PALINDROME CHECK");

console.log(palindromeNum(1221), "PALINDROME CHECK");

//Big O(logn + 1)
