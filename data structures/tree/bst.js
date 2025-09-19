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
    this.deleteNode(value, this.root);
  }

  deleteNode(value, node = this.root) {
    if (!node) return null;
    //searching for the value throught recursion
    if (value > node.value) {
      node.right = this.deleteNode(value, node.right);
    } else if (value < node.value) {
      node.left = this.deleteNode(value, node.left);
    } else {
      //found it!
      if (!node.left && !node.right) return null;
      else if (!node.left) return node.right;
      else if (!node.right) return node.left;
      //in case both leafs exist replace with inorder successor and recurse the process till down
      node.value = this.findMin(node.right);
      node.right = this.deleteNode(node.value, node.right);
    }
    //necessary changes are made, so return the node subtree to be assigned to previous recursion branch to complete the tree
    return node;
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

  print(node = this.root, prefix = "", isLeft = true) {
    if (!node) return;

    // Right side first (so tree looks correct)
    this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);

    // Print current node
    console.log(
      prefix +
        (isLeft ? "└── " : "┌── ") +
        node.value +
        (node.count > 1 ? `(${node.count})` : ""),
    ); // Left side
    this.print(node.left, prefix + (isLeft ? "    " : "│   "), true);
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
bst.print();
