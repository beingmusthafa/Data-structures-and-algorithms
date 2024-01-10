class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      if (!node.children[ch]) {
        return false;
      }
      node = node.children[ch];
    }
    return node.isEnd;
  }

  delete(word) {
    this.deleteRecursively(this.root, word, 0);
  }

  deleteRecursively(node, word, index) {
    if (index === word.length) {
      if (!node.isEnd) {
        return false;
      }
      node.isEnd = false;
      return Object.keys(node.children).length === 0;
    }
    const ch = word[index];
    const childNode = node.children[ch];
    if (!childNode) {
      return false;
    }

    const shouldDeleteNode = this.deleteRecursively(childNode, word, index + 1);
    if (shouldDeleteNode) {
      delete node.children[ch];
      return Object.keys(node.children).length === 0;
    }
    return false;
  }
}

let trie = new Trie();
trie.insert("elephant");
trie.insert("ratch");
trie.insert("rat");
console.log(trie);
console.log(trie.search("rat"));
