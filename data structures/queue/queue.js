class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  getSize() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

let myQueue = new Queue();
myQueue.enqueue("first");
myQueue.enqueue("second");
myQueue.enqueue("third");
myQueue.enqueue("fourth");
myQueue.dequeue();
console.log(myQueue.getSize());
myQueue.print();
myQueue.dequeue();
myQueue.print();
