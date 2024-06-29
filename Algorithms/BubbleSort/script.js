let arr = [9, 8, 4, 7, 2, 7, 4, 6];
// check two if they are sorted then swap
// push max val to last

//// https://www.youtube.com/watch?v=HGk_ypEuS24
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort(arr));

// time complexity-> O(n^2)
