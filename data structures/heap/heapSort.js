function heapSort(array) {
  buildMaxHeap(array);

  for (let i = array.length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];

    heapify(array, 0, i);
  }

  return array;
}

function buildMaxHeap(array) {
  const length = array.length;
  for (let i = Math.floor(length / 2); i >= 0; i--) {
    heapify(array, i, length);
  }
}

function heapify(array, index, heapSize) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    [array[index], array[largest]] = [array[largest], array[index]];
    heapify(array, largest, heapSize);
  }
}

const arrayToSort = [12, 11, 13, 5, 6, 7];
console.log("Original Array: ", arrayToSort);
const sortedArray = heapSort(arrayToSort);
console.log("Sorted Array: ", sortedArray);
