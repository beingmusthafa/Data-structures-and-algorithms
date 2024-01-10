function binarySearch(nums, target) {
  let rightIndex = nums.length - 1;
  let leftIndex = 0;
  while (leftIndex < rightIndex) {
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === nums[middleIndex]) return middleIndex;
    if (target > nums[middleIndex]) leftIndex = middleIndex + 1;
    if (target < nums[middleIndex]) rightIndex = middleIndex - 1;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
// O(log n)

// function recursiveBinarySearch(
//   nums,
//   target,
//   leftIndex = 0,
//   rightIndex = nums.length - 1
// ) {}
// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
