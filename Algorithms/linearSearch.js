/*
-> Consist of iterating over the data strucutre one value at a time and checking if that value is the one we're looking for
*/

const arr = [1, 3, 4, 5, 6, 7, 8, 9];

const search = (num) => {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) return i;
  }
  return -1;
};

console.log(search(6));
console.log(search(19));

//Complexity -> O(n)

//Linear search is the approach used by many built-in JavaScript methods like indexOf, includes, and findIndex.
