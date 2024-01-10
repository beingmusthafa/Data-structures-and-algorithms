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
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
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

  //remove with value
  removeWithValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let prev = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      let final = prev.next;
      if (final.value === value) {
        prev.next = final.next;
        this.size--;
        return;
      }
      prev = prev.next;
    }
    return null;
  }

  //reverse the values
  reverse() {
    if (this.size < 2) return;
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  //remove duplicate values
  removeDuplicates() {
    if (this.size < 2) {
      return;
    }
    let set = new Set();
    let prev = this.head;
    set.add(prev.value);
    let current = prev.next;
    do {
      if (set.has(current.value)) {
        let next = current.next;
        prev.next = next;
        if (next) next.prev = prev;
        this.size--;
        current = next;
      } else {
        set.add(current.value);
        prev = prev.next;
        current = current.next;
      }
    } while (prev && current);
  }

  //create from array
  fromArray(nums) {}

  //show all values
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let valueList = "";
      while (current) {
        valueList += `${current.value} || `;
        current = current.next;
      }
      console.log(valueList);
    }
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
