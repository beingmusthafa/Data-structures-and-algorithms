function quickSort(nums) {
  if (nums.length < 2) return nums;
  let left = [];
  let right = [];
  let pivot = nums[nums.length - 1];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) left.push(nums[i]);
    else right.push(nums[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(
  quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7])
);
//O(n^2) (worst case)
//O(n log n) (avg case)
