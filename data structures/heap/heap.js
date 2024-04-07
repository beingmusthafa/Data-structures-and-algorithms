class MaxHeap {
  constructor() {
    this.heap = [];
  }
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index],
        parentIndex = Math.floor((index - 1) / 2),
        parent = this.heap[parentIndex];
      if (element <= parent) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0,
      length = this.heap.length;
    while (true) {
      let left = 2 * index + 1,
        right = 2 * index + 2,
        swap = null;
      if (left < length && this.heap[left] > this.heap[index]) {
        swap = left;
      }
      if (
        right < length &&
        this.heap[right] > (swap !== null ? this.heap[swap] : this.heap[index])
      ) {
        swap = right;
      }
      if (swap === null) break;
      this.swap(index, swap);
      index = swap;
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  delete() {
    const max = this.heap[0],
      end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return max;
  }

  print() {
    let result = [];
    while (this.heap.length) {
      result.push(this.delete());
    }
    console.log(result);
  }
}

let heap = new MaxHeap();
heap.insert(27);
heap.insert(10);
heap.insert(17);
heap.insert(32);
heap.insert(4);
heap.insert(56);
heap.insert(60);
heap.print();
