/**
 * write a function that takes in the head of the Singly Linked List that contains a loop. In other words, the list's tail node points to
 * some node in the list. The function should return the node from the which the loop originates in constant space.
 * 
 * Sample Input: head node with value 'A'
 * 
 *   A -> B -> C -> D -> E -> F
 *                  ^         |
 *                  |         V
 *                  I <- H <- G
 * 
 * Sample Output:  Node with value' D'
 * 
 *                  D -> E -> F
 *                  ^         |
 *                  |         V
 *                  I <- H <- G
 */
function Node(val) {
    this.value = val;
    this.next = null;
}

//Time O(n)  | SpaceO(1)
function findLoop(head) {
    let first = head.next;
    let second = head.next.next;
    while (first !== second) {
        first = first.next;
        second = second.next.next;
    }
    first = head;
    while(first !== second) {
        first = first.next;
        second = second.next;
    }
    return first; //first and second to same node which loop starts
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');
const h = new Node('H');
const i = new Node('I');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f
f.next = g;
g.next = h;
h.next = i;
i.next = d;

console.log(findLoop(a));