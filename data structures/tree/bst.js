class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    if (!this.root) {
      return true;
    }
    return false;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) this.root = node;
    else this.insertNewNode(this.root, node);
  }

  insertNewNode(root, node) {
    if (node.value < root.value) {
      if (!root.left) root.left = node;
      else this.insertNewNode(root.left, node);
    } else if (node.value > root.value) {
      if (!root.right) root.right = node;
      else this.insertNewNode(root.right, node);
    }
  }

  preOrder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root = this.root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root = this.root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //BFS Algorithm
  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  min(root = this.root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root = this.root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  isValidBST(node = this.root, min = null, max = null) {
    if (!node) {
      return true;
    }
    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    ) {
      return false;
    }
    return (
      this.isValidBST(node.left, min, node.value) &&
      this.isValidBST(node.right, node.value, max)
    );
  }

  findClosest(value) {
    let closest = this.root;
    let currentNode = this.root;
    while (currentNode) {
      if (Math.abs(value - closest) > Math.abs(value - currentNode.value)) {
        closest = currentNode.value;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        break;
      }
    }
    return closest;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(7);
bst.insert(13);
bst.insert(5);
bst.insert(11);
bst.insert(15);
bst.insert(9);
console.log(bst.findClosest(15));
