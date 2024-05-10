//array in javascript does not have an explicit array data type and arrays are represented by the Array object which is a list like object.
//->Array is an Object type with special constructor and accessor methods.
//->Its prototype has methods to perform traversal and mutuation

//------------------------- Ways to create an array ----------------------
// var arr = new Array(1);
// var arr1 = [1];

// var arr = [1, "abhishek", true, "null"];
// console.log(arr);
//in javascript arrays are heterogenious means we can put different data types in an array

let arr = [1, 2, 3, 4, 5, 6];

//1. reading value

console.log(arr[5]);

//2. search value

console.log(arr.indexOf(3), "indexOf");
console.log(arr.includes(4), "includes");

//3. adding value

//arr.push() -> add element in the last
//returns the new length of the array
arr.push(10);

//arr.unshift() -> add element in the start
//returns the new length of the array
arr.unshift(20);

//4. deleting value

//arr.pop() -> delete element from last
//returns the deleted element

let pop = arr.pop();
console.log(pop); //10

//arr.shift() -> delete element from start
//return the deleted element
let shift = arr.shift();
console.log(shift);
console.log(arr);

//-------------------- OPERATION ON ARRAYS -----------------

//Link To: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
/*
2 TYPES
1. in-place -> changing the object in the same address without creating a new object
2. not in-place -> vice versa
*/

let arr2 = [4, 5, 6, 7, 8, 1, 3, 4];

//1. Splice -> in-place ::: Removes element from an array and if necessary inserts new elemnt in their place, returning the deleted elements

// const spliceArray = arr2.splice(2, 3);
// console.log(spliceArray);

//2. Slice -> Not in place -> returns a shallow copy of array

const slicedArray = arr2.slice(2, 6);
console.log(slicedArray);
console.log(arr2);

//3. Sort -> in-place ::: sorts the elements inside the array in INC or DEC order

const arr3 = [8, 7, 6, 3, 5, 4, 1];

// arr3.sort();
// console.log(arr3);

//BY DEFAULT IT IS DICTIONARY SORTING.

arr3.sort((a, b) => a - b); //accending order
console.log(arr3, "asecending");
arr3.sort((a, b) => b - a); //decending order
console.log(arr3, "decending");
