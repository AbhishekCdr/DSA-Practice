/*
-> APPLICABLE ON SORTED ARRAY   
Following steps
1. Select the middle value of the data structure and ask is this the value we're looking for
2. if not then ask whether the value is less or greater than the middle value
3. if greater then discard all the smaller mid value and if smaller then discard all the larger value from the middle
4. repeate the steps until found
*/
//Complexity-> O(log n)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//if not sorted then first sort it
// const arr = [99, 54, 2, 56, 23, 12, 90];
// arr.sort((a, b) => a - b);
// console.log(arr);

const search = (num) => {
  //three pointer approach
  //start, end and middle
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  //haven't found the number and start is equal or smaller to the end pointer
  while (arr[middle] !== num && start <= end) {
    //if number is less than middle discard the end
    if (num < arr[middle]) end = middle - 1;
    //if number is larger than middle discard the first
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }
  //if we've exited the loop either we have found it or we haven't
  return arr[middle] === num ? middle : -1;
};

// console.log(search(56));
// console.log(search(23));

//RECURSIVE approach

function recursiveBinarySearch(n, arr) {
  let mid = Math.floor(arr.length / 2);
  //base case
  if (arr.length === 1 && arr[0] != n) {
    return false;
  }
  if (n === arr[mid]) {
    return true;
  } else if (n < arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(0, mid));
  } else if (n > arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(mid));
  }
}

//finding the value and return true if found and flase if not
// console.log(recursiveBinarySearch(3, arr));

function recursiveBinary(arr, val, start, end) {
  if (start > end) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === val) {
    return middle;
  }

  if (arr[middle] > val) {
    return recursiveBinary(arr, val, start, middle - 1);
  } else {
    return recursiveBinary(arr, val, middle + 1, end);
  }
}

console.log(recursiveBinary(arr, 8, 0, 8));
