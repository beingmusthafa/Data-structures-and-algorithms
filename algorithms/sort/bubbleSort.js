/**
 * This implementation of Bubble Sort uses a `do...while` loop that continues as long as a swap has occurred in the inner loop.
 * The inner `for` loop iterates through the array, comparing adjacent elements and swapping them if they are in the wrong order.
 * The `isSwapped` flag is used to track if any swaps have been made in a pass. If a pass completes with no swaps, the array is sorted.
 * Time complexity: O(n^2).
 */
function bubbleSort(nums) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
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
  bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7]),
);
