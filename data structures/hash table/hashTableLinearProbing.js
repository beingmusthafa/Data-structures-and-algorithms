class HashTable {
  TOMBSTONE = "_";

  constructor(size) {
    this.items = new Array(size).fill(null);
    this.tableSize = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % this.tableSize;
    }
    return hash;
  }

  insertValue(key, value) {
    const index = this.hash(key);
    if (!this.items[index] || this.items[index] === this.TOMBSTONE) {
      this.items[index] = { key, value };
      console.log(`inserted [${key} : ${value}] at index ${index}`);
      return;
    }
    if (this.items[index].key === key) {
      this.items[index].value = value;
      console.log(`updated [${key} : ${value}] at index ${index}`);
      return;
    }
    console.log("collision in index ", index);
    //handle collision thorugh linear probe
    this.handleCollisionLinearProbe(index, key, value);
  }

  handleCollisionLinearProbe(index, key, value) {
    for (let i = 0; i < this.tableSize; i++) {
      const probeIndex = (index + i) % this.tableSize;
      if (
        !this.items[probeIndex] ||
        this.items[probeIndex] === this.TOMBSTONE
      ) {
        this.items[probeIndex] = { key, value };
        console.log(`LP : inserted ${key} : ${value} at ${probeIndex}`);
        return;
      }
      if (this.items[probeIndex].key === key) {
        this.items[probeIndex] = { key, value };
        console.log(`LP : updated ${key} : ${value} at ${probeIndex}`);
        return;
      }
    }
    console.log("table full, failed to insert");
  }

  find(key) {
    const index = this.hash(key);
    let element = null;
    //linear probe
    let probeIndex;
    for (let i = 0; i < this.tableSize; i++) {
      probeIndex = (index + i) % this.tableSize;
      if (!this.items[probeIndex]) {
        console.log(`key '${key}' not found in table`);
        return;
      }
      if (this.items[probeIndex] === this.TOMBSTONE) continue;
      if (this.items[probeIndex].key === key) {
        element = this.items[probeIndex];
        break;
      }
    }

    if (!element) {
      console.log(`key '${key}' not found in table`);
      return;
    }
    console.log(
      `found item : ${element.key} - ${element.value} at ${probeIndex}`,
    );
  }

  delete(key) {
    const index = this.hash(key);
    for (let i = 0; i < this.tableSize; i++) {
      const probeIndex = (index + i) % this.tableSize;
      if (!this.items[probeIndex]) {
        console.log("key to delete not found :", key);
        return;
      }
      if (this.items[probeIndex] === this.TOMBSTONE) continue;
      if (this.items[probeIndex].key === key) {
        this.items[probeIndex] = this.TOMBSTONE;
        console.log("deleted key : ", key);
        return;
      }
    }
  }

  resize() {
    const oldTable = this.items;
    this.items = new Array(this.tableSize * 2).fill(null);
    this.tableSize *= 2;
    //re-insert all previous values. why? because hash function logic changes when table size changes. so older values become inconsistent
    for (const item of oldTable) {
      if (!item || item === this.TOMBSTONE) continue;
      this.insertValue(item.key, item.value);
    }
  }
}

const ht = new HashTable(20);

ht.insertValue("Anna", 25); // maybe goes to index 7
ht.insertValue("Nana", 30); // likely same index as "Anna" → collision
ht.insertValue("Mike", 22); // index 3
ht.insertValue("Emik", 28); // likely collides with "Mike"
ht.insertValue("Bob", 40); // index 4
ht.insertValue("Obb", 33); // maybe collides with "Bob"
ht.insertValue("Emik", 33);

ht.find("Emik");
