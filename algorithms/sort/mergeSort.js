function mergeSort(nums) {
  if (nums.length < 2) return nums;
  const mid = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, mid);
  const rightArray = nums.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
function merge(leftArray, rightArray) {
  let sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}
console.log(
  mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7])
);
//O(n log n)
