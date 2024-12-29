const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// class NodeTree {
//   constructor(data) {
//     this.value = data;
//     this.left = null;
//     this.right = null;
//   }
// }
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    if (!this.root) {
      return;
    }
    return this.root;
  }

  add(data) {
    this.root = addWithin(this.root, data);

    function addWithin(node, value) {
      if (!node) {
        return {
          value: value,
          left: null,
          right: null,
        };
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.root, data);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value
        ? searchWithin(node.left, value)
        : searchWithin(node.right, value);
    }
  }

  find(data) {
    return findWithin(this.root, data);

    function findWithin(node, value) {
      if (!node) {
        return null;
      }

      if (node.value === value) {
        return node;
      }

      return value < node.value
        ? findWithin(node.left, value)
        : findWithin(node.right, value);
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // value equal

        //maybe node is a leaf
        if (!node.left && !node.right) {
          return null;
        }
        // maybe has right child
        if (!node.left) {
          node = node.right;
          return node;
        }
        // maybe has left child
        if (!node.right) {
          node = node.left;
          return node;
        }

        // has both children
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.value = minFromRight.value;
        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree,
};
