/**
 * Given a Binary Tree, find count of distinct nodes in a root to leaf path with maximum distinct nodes.
Examples:

Input :   1
        /    \
       2      3
      / \    / \
     4   5  3   7
             \   \
              8   9 
Output : 4 
The root to leaf path with maximum distinct
nodes is 1-3-6-8.
 */
const Node = require("./node");

function largestuniquePath(node) {
    if (!node) {
        return 0;
    }
const HASH = {};
return largestUniquePathUtil(node, HASH)
}

//helper

function largestUniquePathUtil(node, map) {
    if (!node) {
        return Object.keys(map).length;
    }
    if (node.value in map) {
        map[node.value] += 1;
    } else {
        map[node.value]  = 1;
    }

    maxPath = Math.max(largestUniquePathUtil(node.left,map), largestUniquePathUtil(node.right, map));

    map[node.value] -= 1; //remove current node from "map"

    if (map[node.value] === 0) {
        delete map[node.value];
    }
    return maxPath;
}

const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(3);
root.right.right = new Node(7);

root.right.left.right = new Node(8);
root.right.right.right = new Node(9);



console.log(largestuniquePath(root));


