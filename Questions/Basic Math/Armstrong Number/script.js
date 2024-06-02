// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

/*

Example 1:
Input:N = 153
Output:True
Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153

*/

function Armstrong(n) {
  const k = String(n).length;
  let tem = n;
  let sum = 0;

  while (n > 0) {
    let ld = n % 10;

    sum += Math.pow(ld, k);

    n = Math.floor(n / 10);
  }

  return tem === sum;
}

console.log(Armstrong(371), "Armstrong Number");

// Big O(logn + 1)
