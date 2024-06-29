//The Greatest Common Divisor of any two integers is the largest number that divides both integers.
/*
Example 1:
Input:N1 = 9, N2 = 12
                
Output:3
Explanation:Factors of 9: 1, 3 and 9
Factors of 12: 1, 2, 3, 4, 6, 12
Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.
*/

function gdc(num1, num2) {
  let gdc = 1;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gdc = i;
    }
  }

  return gdc;
}

// console.log(gdc(55, 15));
//brute force approach
// BigO(n)

//better approach
//iterating from last

function gdcLast(num1, num2) {
  for (let i = Math.min(num1, num2); i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }

  return 1;
}

// console.log(gdcLast(10, 50));

// Better -> Euclidean algorithm
// gdc of two number remain same even if we subtract large number with small number;

function euclideanGdc(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  if (a === 0) {
    return b;
  }

  return a;
}

console.log(euclideanGdc(100, 10));
