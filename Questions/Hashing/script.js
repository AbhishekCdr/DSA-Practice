/*
HASHING -> pre storing & fetching*
***-> It is combination of the steps, pre storing and fetching
*/

//QUESTION 1 -> COUNT FREQUENCY OF EACH ELEMENT IN THE ARRAY

function countNumbers(arr) {
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (freq[element] !== undefined) {
      freq[element]++;
    } else {
      freq[element] = 1;
    }
  }

  return freq;
}

// let arr = [1, 2, 3, 4, 3, 2, 1, 5, 3, 100, 100];

// console.log(countNumbers(arr));

//QUESTION 2 -> HIGHEST AND LOWEST FREQUENCY ELEMENT

function highestLowest(arr) {
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (freq[element] !== undefined) {
      freq[element]++;
    } else {
      freq[element] = 1;
    }
  }

  return freq;
}

let arr = [10, 5, 10, 15, 10, 5];
console.log(highestLowest(arr));
