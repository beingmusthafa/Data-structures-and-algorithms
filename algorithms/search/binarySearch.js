function binarySearch(nums, value) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (value < nums[middle]) right = middle - 1;
    else if (value > nums[middle]) left = middle + 1;
    else return middle;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
