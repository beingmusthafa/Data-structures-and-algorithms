class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

let myTable = new HashTable(10);
myTable.set("first", 1);
myTable.set("second", 2);
myTable.set("third", 3);
console.log(myTable.get("second"));
myTable.display();
myTable.remove("second");
myTable.display();
