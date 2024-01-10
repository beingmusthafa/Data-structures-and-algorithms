function bubbleSort(nums) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
  return nums;
}
console.log(
  bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7])
);
