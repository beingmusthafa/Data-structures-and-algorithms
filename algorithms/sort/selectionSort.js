function selectionSort(nums) {
  let temp;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}
console.log(selectionSort([5, 6, 4, 3, 2, 5, 7, 8]));
// O(n^2)
