class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //add values to the beginning
  prepend(value) {
    const node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  //add values to the end
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  //insert values
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  //insert before a value
  insertBefore(value, insertValue) {
    if (this.isEmpty()) {
      return null;
    }
    const node = new Node(insertValue);
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }
    let prev = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      let after = prev.next;
      if (after.value === value) {
        prev.next = node;
        node.next = after;
        this.size++;
        return;
      }
      prev = prev.next;
    }
    return "value not found";
  }

  insertAfter(value, insertValue) {
    if (this.isEmpty()) {
      return null;
    }
    const node = new Node(insertValue);
    if (this.head.value === value) {
      node.next = this.head.next;
      this.head.next = node;
      this.size++;
      return;
    }
    let current = this.head.next;
    for (let i = 0; i < this.size - 1; i++) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        this.size++;
        return;
      }
      current = current.next;
    }
    return "value not found";
  }

  //remove with index
  removeWithIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    } else if (index === 0) {
      let removedNode = this.head;
      this.head = removedNode.next;
      this.size--;
      return removedNode.value;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      let final = prev.next;
      prev.next = final.next;
      this.size--;
      return final.value;
    }
  }

  //reverse the values
  removeWithValue(value) {
    if (this.isEmpty()) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      console.log("deleted " + value);
      return;
    }
    let prev = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      let curr = prev.next;
      if (curr.value === value) {
        prev.next = curr.next;
        this.size--;
        console.log("deleted " + value);
        return;
      }
      prev = curr;
    }
  }

  removeDuplicates() {
    if (this.size < 2) return;
    let valueSet = new Set();
    let prev = null;
    let curr = this.head;
    while (curr) {
      if (valueSet.has(curr.value)) {
        prev.next = curr.next;
        curr = curr.next;
        this.size--;
      } else {
        valueSet.add(curr.value);
        prev = curr;
        curr = curr.next;
      }
    }
  }

  //create from array
  fromArray(nums) {}

  //show all values
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let values = "";
    let curr = this.head;
    while (curr) {
      values += curr.value + " | ";
      curr = curr.next;
    }
    console.log(values);
  }
}

//TESTING

const list = new LinkedList();
list.print();
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
