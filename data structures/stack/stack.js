class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
    this.size = 0;
  }

  add(element) {
    this.items[this.top] = element;
    this.top++;
    this.size++;
  }

  remove() {
    const removed = this.items[this.top];
    delete this.items[--this.top];
    this.size--;
    return removed;
  }

  getSize() {
    return this.size;
  }

  print() {
    console.log(this.items);
  }
}

let stack = new Stack();
stack.add("one");
stack.add("two");
stack.add("three");
stack.add("four");
stack.add("five");
stack.add("six");
stack.print();
stack.remove();
stack.print();
stack.remove();
stack.print();
console.log(stack.getSize());
