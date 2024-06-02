/*
Input:
 arr[] = {2,5,1,3,0};
Output:
 5
Explanation:
 5 is the largest element in the array. 

Example2:
Input:
 arr[] = {8,10,5,7,9};
Output:
 10
Explanation:
 10 is the largest element in the array.
*/

//BRUT FORCE APPROACH

function largestElement(arr) {
  arr.sort((a, b) => a - b);

  return arr[arr.length - 1];
}

let arr = [8, 10, 5, 7, 9];
console.log(largestElement(arr), "slow method -> SORT & RETURN LAST");
//Time Complexity -> Big O(nlogn)
//Space -> O(n)

//*********************************** */

//RECURSIVE APPROACH

function findLargestElement(arr) {
  let max = 0; //-> compare and save the largest value

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findLargestElement(arr), "FIRST COMPARE AND SAVE");

//Big O(n)

//************* CHECK SORTED ARRAY *********************** */

function sortedArray(arr) {
  let left = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[left]) {
      return false;
    }
    left++;
  }
  return true;
}

let arr1 = [0, 1, 2, 3, 4, 6, 6, 7];

console.log(sortedArray(arr1), "check sorted");

//*************** REMOVE DUPLICATES FROM SORTED ARRAY **************/

//using sets
function checkDuplicate(arr) {
  let set = new Set(arr);
  arr.length = 0;

  for (let value of set) {
    arr.push(value);
  }

  return arr.length;
}

let arr2 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];

console.log(checkDuplicate(arr2), "-> Using Set");

// Big O(nlogn) + O(n)
// Space -> O(n)

//using two pointer -> OPTIMAL SOLUTION

function checkDublicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
    }
    arr[i] = arr[j];
  }

  return i + 1;
}

console.log(checkDublicates(arr2), "-> Two Pointer");
//Big O(n) -> Time
//Space O(1)

//******************** ROTATE ARRAY BY ONE *********************/
/*
Example 1:
Input:
 N = 5, array[] = {1,2,3,4,5}
Output:
 2,3,4,5,1
Explanation:
 
Since all the elements in array will be shifted 
toward left by one so ‘2’ will now become the 
first index and and ‘1’ which was present at 
first index will be shifted at last.
*/

//Store first value in temp variable and then appedn it to last
function rotateArray(arr) {
  let n = arr.length;
  let temp = arr[0];

  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
  return arr;
}

const arr3 = [1, 2, 3, 4, 5, 6];

console.log(rotateArray(arr3), "rotate by one");
//Big O(n)

//*************** ROTATE ARRAY BY N TIMES ******************/
/*
Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
Output: 6 7 1 2 3 4 5
Explanation: array is rotated to right by 2 position .
*/

function rotateByN(arr, n) {
  //pending
}

//**************** MOVE ALL ZEROS TO END ********************/
/*
Input:
 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output:
 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
*/

//BRUTE FORCE -> using temp array

function moveZeroToEnd(arr) {
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      temp.push(arr[i]);
    }
  }

  return temp;
}

let arr4 = [1, 0, 2, 3, 0, 4, 0, 1];
console.log(moveZeroToEnd(arr4), "-> Using Temp array");

//Big O(n) -> Time Complexity

function moveZeros(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

console.log(moveZeros(arr4), "-> using splice");

//***************** UNION OF TWO SORTED ARRAY *****************/

// USING SET

function findUnion(arr1, arr2) {
  const set = new Set();

  for (let num of arr1) {
    set.add(num);
  }
  for (let num of arr2) {
    set.add(num);
  }

  return Array.from(set);
}

arrFirst = [1, 2, 3, 4, 5, 6];
arrSecond = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(findUnion(arrFirst, arrSecond), "Union of array");

//Big O(m+n log(m+n))
