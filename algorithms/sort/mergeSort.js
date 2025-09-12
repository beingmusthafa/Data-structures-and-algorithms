/**
 * This implementation of Merge Sort recursively divides the array into two halves until it reaches arrays of length 1.
 * The `mergeSort` function calls itself for the left and right halves of the array.
 * The `merge` function then takes two sorted arrays and merges them into a single sorted array by comparing their elements one by one.
 * Time complexity: O(n log n).
 */
function mergeSort(nums) {
  //return if array has only one element, since thats the base case here
  if (nums.length === 1) return nums;
  //take mid point and slice arrays to left and right
  const mid = Math.floor(nums.length / 2);
  const leftArr = nums.slice(0, mid);
  const rightArr = nums.slice(mid);
  //merge the sliced arrays
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  let i = 0,
    j = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      sortedArr.push(leftArr[i]);
      i++;
    } else {
      sortedArr.push(rightArr[j]);
      j++;
    }
  }
  while (i < leftArr.length) sortedArr.push(leftArr[i++]);
  while (j < rightArr.length) sortedArr.push(rightArr[j++]);
  return sortedArr;
}

console.log(
  mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7]),
);
//O(n log n)
