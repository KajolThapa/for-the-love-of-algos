"use strict";

const Node = require("./node");

// class Private {

//   static exists(value, node) {

//   }

//   static dfs(node, result) {

//   }
// }

/**
 * Binary Search Tree example.
 */
class BinarySearchTree extends Node {
  constructor(head) {
    super(head);
    this.head = head;
   
  }

  /**
   * Search for a value in a BST returning true if found and false it not found.
   * @param value
   * @returns {*}
   */
  // eslint-disable-next-line consistent-return
  exists(value) {
    if (!this.head) {return false;}
    if (value === this.head.value) {return true;}
    if (value > this.head.value && this.head.right !== null) {
      let newBST = new BinarySearchTree(this.head.right);

      return newBST.exists(value);
    }
    if (value < this.head.value && this.head.left !== null) {
      let newBST = new BinarySearchTree(this.head.left);

      return newBST.exists(value);
    }
    return false;
  }

  /**
   * Add items to an array when node is visited using depth first approach.  Return array when done.
    --kajol: Assuming the given dfs search is PreOrder
   */
  dfs() {
    const result = [];

    if (!this.head) {return result;}

    function preOrder(node) {
      result.push(node.value);
      if (node.left) {preOrder(node.left);}
      if (node.right) {preOrder(node.right);}
    }

    preOrder(this.head);
    return result;

  }
  /**
   * kajol - have created two more methods for PostOrder and InOrder Search
   */
  dfsPost() {
    const result = [];

    if (!this.head) {return result;}
    function postOrder(node) {
      if (node.left) {postOrder(node.left);}
      if (node.right) {postOrder(node.right);}
      result.push(node.value);
      
    }
    postOrder(this.head);
    return result;

  }

  dfsIn() {
    const result = [];

    if (!this.head) {return result;}
    function inOrder(node) {
      if (node.left) {inOrder(node.left);}
      result.push(node.value);
      if (node.right) {inOrder(node.right);}

    }
    inOrder(this.head);
    return result;

  }

  /**
   * Add items to an array when node is visited using breath first approach. Return array when done.
   */
  bfs() {
    const result = [];
    let node = this.head;
    const queue = [node];

    if (!node) {return result;}

    while (queue.length) {
      node = queue.shift();
      if (node.left) {queue.push(node.left);}
      if (node.right) {queue.push(node.right);}
      result.push(node.value);
    }
    return result;
  }

}

module.exports = BinarySearchTree;
