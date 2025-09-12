function mergeSort(nums) {
  if (nums.length === 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const leftArr = nums.slice(0, mid);
  const rightArr = nums.slice(mid);
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
