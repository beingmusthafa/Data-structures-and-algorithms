/**
 * This implementation of Quicksort selects the last element of the array as the pivot.
 * It then iterates through the array (excluding the pivot), and partitions the elements into two sub-arrays: `left` (elements smaller than the pivot) and `right` (elements greater than or equal to the pivot).
 * The function then recursively calls itself on the `left` and `right` sub-arrays and concatenates the results with the pivot in the middle.
 * Time complexity: O(n^2) (worst case), O(n log n) (avg case).
 */
function quickSort(nums) {
  if (nums.length < 2) return nums;
  let left = [];
  let right = [];
  let pivot = nums[nums.length - 1];
  for (
    let i = 0;
    //stop just before the pivot so that we don't compare the pivot with itself
    i < nums.length - 1;
    i++
  ) {
    if (nums[i] < pivot) left.push(nums[i]);
    else right.push(nums[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(
  quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7]),
);
//O(n^2) (worst case)
//O(n log n) (avg case)
