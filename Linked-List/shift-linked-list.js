/**
 *Write a function that takes the head of a singly linked list and an integer k, shifts the list in place, (i.e., doesn't create a brand new list)
 by k positions, and returns a new head;

 Shifting a Linked List means moving its nodes forward or backward and wrapping them around the list where appropriate.

 Whether nodes are moved forward or backward is determined by whether k is positive or negative.

                    Sample Input: 
                    head =  0 -> 1 -> 2 -> 3 -> 4 -> 5   //head with a value 0
                    k = 2

                    Sample Output:  4 -> 5 -> 1 -> 2 -> 3  //head with a value 4
 */

function Node(value) {
    this.value = value;
    this.next = null;
}
// Time O(n)  |  Space O(1)
function shiftLinkedList(head, k) {
    let listLength = 1;
    let listTail = head;
    while (listTail.next !== null) {
        listTail = listTail.next;
        listLength += 1;
    }
    const offsetK = Math.abs(k) % listLength;
    if (offsetK === 0) return head; 

    const newTailPosition = k > 0 ? listLength - offsetK : offsetK;
    let newTail = head;
    for (let i = 1; i < newTailPosition; i++) {
        newTail = newTail.next;
    }
    const newHead = newTail.next;
    newTail.next = null;
    listTail.next = head;
    return newHead;   
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

// console.log(shiftLinkedList(a, 2));
// console.log(shiftLinkedList(a, -2));
// console.log(shiftLinkedList(a, 7));