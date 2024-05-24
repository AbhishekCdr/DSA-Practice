//BRUTE FORCE APPROACH

function countDigit(n) {
  let count = 0;

  while (n > 0) {
    count++;

    n = Math.floor(n / 10);
  }

  return count;
}

console.log("Number of count: ", countDigit(23243234)); // logs 8
//Big O(logn + 1)

//OPTIMAL SOLUTION

function countDigit1(n) {
  let count = Math.floor(Math.log10(n) + 1);
  // The expression Math.floor(Math.log10(n) + 1)
  // calculates the number of digits in 'n'
  // and rounds it down to the nearest whole number.

  // Adding 1 to the result accounts
  // for the case when 'n' is a power of 10,
  // ensuring that the count is correct.

  // Return the count of digits in 'n'.
  return count;
}

console.log("Number of count: ", countDigit1(100));
//Big O(1)
