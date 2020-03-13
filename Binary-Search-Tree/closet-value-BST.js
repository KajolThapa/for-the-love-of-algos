/**
 * You are given a BST data structure consisting of BST nodes. 
 * Each BST node has an integer value stored in a property called "value". and two children nodes stored in properties called "left" and "right", respectively.
 * A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left;
 * its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or null values.
 * You are also given a target integer value; write a function that finds the closet value to the target value contained in the BST. Assume that there will only be one closet value.
 * 
 * 
 * Sample Input:
 *            10          , 12
 *         /      \
 *        5        15
 *      /  \      /   \
 *     2    5   13     22
 *    /           \
 *   1             14
 * 
 * Sample output: 13
 */
    

 
// Solution 1  // if recurrsively solved Space complexity is same as Time.
//Average:  O(log(N)) Time   |  O(log(N)) Space
//Worst:    O(N) Time    |    O(N) Space 
 function findClosetValue(BST, target) {
     return findClosetValueBSTHelper(BST, target, Infinity)
 }

 //helper
 function findClosetValueBSTHelper(tree, target, closest) {
     if (tree === null) {
         return closest;
     }
     if  (Math.abs(target - closest) > Math.abs(target - tree.value)) {
         closest = tree.value;
     }
     if (target < tree.value) {
         return findClosetValueBSTHelper(tree.left, target, closet)
     } else if (target > tree.value) {
        return findClosetValueBSTHelper(tree.right, target, closet)
    } else {
        return closet;
    }

 }

 //solution 2
//Average:  O(log(N)) Time   |  O(1) Space
//Worst:    O(N) Time    |    O(1) Space 
 function findClosetValueInBST(tree, target) {
     return findClosetValueInBSTHelper(tree, target, Infinity);
 }

 function findClosetValueInBSTHelper(tree, target, closest) {
     let currentNode = tree;
     while (currentNode !== null) {
        if  (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }
        if (target < currentNode.value) {
           currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
       } else {
           break;
       }
     }
     return closet;
 }