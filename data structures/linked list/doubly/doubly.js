class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    if (this.isEmpty()) {
      this.tail = node;
    } else {
      this.head.prev = node;
    }
    this.head = node;
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    node.prev = this.tail;
    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;

    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      const node = new Node(value);
      node.next = prev?.next;
      node.prev = prev;
      prev.next = node;
      this.size++;
    }
  }
  insertBefore(value, insertValue) {
    if (this.isEmpty()) return;
    if (this.head.value === value) {
      this.prepend(insertValue);
      return;
    } else {
      let prev = this.head;
      while (prev) {
        let current = prev.next;
        if (current.value === value) {
          const node = new Node(insertValue);
          node.next = current;
          node.prev = prev;
          prev.next = node;
          current.prev = node;
          this.size++;
          return;
        }
        prev = prev.next;
      }
    }
    return null;
  }
  insertAfter(value, insertValue) {
    if (this.isEmpty()) return;
    if (this.tail.value === value) {
      this.append(insertValue);
    } else {
      let current = this.head;
      while (current) {
        let next = current.next;
        if (current.value === value) {
          const node = new Node(insertValue);
          node.next = next;
          node.prev = current;
          next.prev = node;
          current.next = node;
          this.size++;
          return;
        }
        current = current.next;
      }
    }
  }
  removeWithIndex(index) {
    if (index < 0 || index > this.size - 1) {
      console.log("invalid index");
      return;
    }
    if (index === 0) {
      this.removeFirst();
    } else if (index === this.size - 1) {
      this.removeLast();
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      let current = prev.next;
      let next = current.next;
      next.prev = prev;
      prev.next = next;
      this.size--;
      console.log(`removed ${current.value}`);
    }
  }
  removeWithValue() {}
  removeFirst() {
    if (this.isEmpty()) return;
    let removedNode = this.head;
    this.head = removedNode.next;
    this.head.prev = null;
    this.size--;
    console.log(`removed ${removedNode.value}`);
  }
  removeLast() {
    if (this.isEmpty()) return;
    let removedNode = this.tail;
    this.tail = removedNode.prev;
    this.tail.next = null;
    this.size--;
    console.log(`removed ${removedNode.value}`);
  }
  reverse() {
    if (this.size < 2) {
      return;
    }
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = current.prev;
      current.prev = next;
      current = next;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    } else {
      let current = this.head;
      let values = "";
      while (current) {
        values += `${current.value} |`;
        current = current.next;
      }
      console.log(values);
    }
  }
  fromArray(nums) {
    const node = new Node(nums[0]);
    this.head = node;
    this.tail = node;
    this.size++;
    for (let i = 1; i < nums.length; i++) {
      const node = new Node(nums[i]);
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.prepend(5);
list.append(2);
list.append(3);
list.append(3);
list.append(5);
list.append(3);
list.append(3);
list.print();
list.reverse();
list.print();
