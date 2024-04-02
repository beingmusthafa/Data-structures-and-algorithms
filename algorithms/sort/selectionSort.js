function selectionSort(nums) {
  let length = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (nums[j] < nums[min]) min = j;
    }
    if (min !== i) {
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
    }
  }
  return nums;
}
console.log(selectionSort([5, 6, 4, 3, 2, 5, 7, 8]));
// O(n^2)
