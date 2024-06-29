//CHECK IF A NUMBER IS PRIME OR NOT
//PRIME NUMBER- nmber which is divisible by 1 and itself and have ony two divisors

function checkPrime(num) {
  let cnt = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      cnt = cnt + 1;
    }
  }

  return cnt === 2;
}

// for (let i = 0; i <= 50; i++) {
//   if (checkPrime(i)) {
//     console.log(i);
//   }
// }

//Big O(n) -> n is the input of number as we iterate from 1 to N

//******** BETTER SOLUTION ***********//
function checkPrimeFast(num) {
  let cnt = 0;

  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      cnt = cnt + 1;

      if (num / i !== i) {
        cnt = cnt + 1;
      }
    }
  }

  return cnt === 2;
}

// console.log(checkPrimeFast(5));

//Big O(sqrt(n))

let obj = {
  username: "sharon",
  age: 27,
  printAge: function () {
    console.log("this inside function:", this);
    return function () {
      console.log("this:", this);
      console.log("My username is:", this.username);
    };
  },
};
const func = obj.printAge();
let newObj = { username: "shashi", age: 26 };
func.call(newObj);
