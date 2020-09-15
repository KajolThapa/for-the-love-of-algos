/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */
function Node(val) {
    this.value = val;
    this.next = null;
}

function kthToLastNode(k, head) {
  const nodeValues = [head.value];
  let next = head.next;
  while (next) {
      nodeValues.push(next.value);
      next = next.next;
  }
  return nodeValues[nodeValues.length - k];
} 

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(a);
console.log(kthToLastNode(2, a));
