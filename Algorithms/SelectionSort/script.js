let arr = [1, 9, 8, 6, 3, 8, 6];
// https://www.youtube.com/watch?v=HGk_ypEuS24

// implementation of selection sort
// select min and swap

function slectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let mini = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }

    let temp = arr[mini];
    arr[mini] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

console.log(slectionSort(arr));

// Time Complexity -> O(n^2)
