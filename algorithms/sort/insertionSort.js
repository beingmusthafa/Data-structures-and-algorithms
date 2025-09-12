/**
 * This implementation of Insertion Sort iterates from the second element to the end of the array.
 * In each iteration, it takes the current element (`key`) and finds its correct position in the already sorted part of the array (from the beginning to the element before the current one).
 * To do this, it shifts all the elements greater than the `key` one position to the right, and then inserts the `key` into the correct position.
 * Time complexity: O(n^2).
 */
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let key = nums[i];
    let j = i - 1;
    //looping and shifting larger elements to the right
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
}

console.log(insertionSort([5, 7, 9, 3, 5, 0, -1, 13, 8]));
// O(n^2)
