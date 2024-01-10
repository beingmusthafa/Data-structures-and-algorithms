class Deque {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  addFront(element) {
    this.front++;
    this.items[this.front] = element;
  }

  removeFront() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front--;
  }

  addRear(element) {
    this.rear--;
    this.items[this.rear] = element;
  }
  removeRear() {
    const item = this.items[this.rear];
    delete this.items[this.rear];
    this.rear++;
    return item;
  }
  print() {
    console.log(this.items);
  }
}

let queue = new Deque();
queue.addFront("test2");
queue.addFront("test2");
queue.addFront("test2");
queue.addRear("test1");
queue.addRear("test1");
queue.addRear("test1");

queue.removeRear();
queue.print();
