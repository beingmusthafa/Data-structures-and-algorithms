class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Helper method to swap the nodes
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Method to maintain the heap property during insertion
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index],
        parentIndex = Math.floor((index - 1) / 2),
        parent = this.heap[parentIndex];

      if (parent >= element) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // Method to maintain the heap property during deletion
  heapifyDown() {
    let index = 0,
      length = this.heap.length,
      element = this.heap[0];

    while (true) {
      let leftChild = 2 * index + 1,
        rightChild = 2 * index + 2,
        swap = null;

      if (leftChild < length) {
        if (this.heap[leftChild] > element) {
          swap = leftChild;
        }
      }

      if (rightChild < length) {
        if (
          (swap !== null && this.heap[rightChild] > this.heap[leftChild]) ||
          (swap === null && this.heap[rightChild] > element)
        ) {
          swap = rightChild;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  // Method to insert a new node
  insert(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  // Method to remove the root
  remove() {
    let removed = this.heap.shift();
    this.heapifyDown();
    return removed;
  }
}

let maxHeap = new MaxHeap();
maxHeap.insert(3);
maxHeap.insert(2);
maxHeap.insert(1);
console.log(maxHeap.remove()); // 3
