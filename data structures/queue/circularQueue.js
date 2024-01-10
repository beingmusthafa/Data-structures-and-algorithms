class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = 0;
    this.front = 0;
    this.capacity = capacity;
    this.size = 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.items[this.rear] = element;
      this.rear = (this.rear + 1) % this.capacity;
      this.size++;
    }
  }

  dequeue() {
    if (this.isEmpty()) return;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    if (this.isEmpty()) {
      this.front = 0;
    }
    return item;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  getSize() {
    return this.size;
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let values = "";
      for (const item of this.items) {
        values += `${item} | `;
      }
      console.log(values);
    }
  }
}

let myQueue = new CircularQueue(7);
myQueue.enqueue("first");
myQueue.enqueue("second");
myQueue.enqueue("third");
myQueue.enqueue("fourth");
myQueue.enqueue("fifth");
myQueue.enqueue("sixth");
myQueue.enqueue("seventh");
console.log(myQueue.getSize());
myQueue.print();
myQueue.dequeue();
myQueue.print();
