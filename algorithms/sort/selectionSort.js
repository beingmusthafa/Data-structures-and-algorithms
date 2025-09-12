/**
 * This implementation of Selection Sort iterates through the array with an outer loop.
 * In each iteration of the outer loop, it finds the index of the minimum element in the unsorted part of the array (from the current index to the end) using an inner loop.
 * After finding the minimum element, it swaps it with the element at the current index of the outer loop.
 * This process gradually builds the sorted part of the array from left to right.
 * Time complexity: O(n^2).
 */
function selectionSort(nums) {
  let length = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (nums[j] < nums[min]) min = j;
    }
    if (min !== i) {
      //if min is not i, that means we found a smaller element, so keep that element at i and proceed
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
    }
  }
  return nums;
}
console.log(selectionSort([5, 6, 4, 3, 2, 5, 7, 8]));
// O(n^2)
