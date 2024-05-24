function findDivisor(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(findDivisor(24));

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
}

console.log(factorial(0));
