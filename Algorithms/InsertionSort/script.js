let arr = [9, 5, 7, 3, 4, 1, 7, 8];
// swap the first to last
// https://www.youtube.com/watch?v=HGk_ypEuS24

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort(arr));

// time Complexity -> O(n^2)
