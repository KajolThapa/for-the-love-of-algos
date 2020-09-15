/* 
 * You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list.
 * Write a function that adds the two numbers and returns the sum as a linked list with the same structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

 function Node(val) {
     this.value = val;
     this.next = null; 
 }

 function addLinkedList(headOne,headTwo) {
    let currNode = new Node();
    const head = currNode;
    let sum = 0;
    while (headOne || headTwo || sum) {
        if (headOne) {
            sum += headOne.value;
            headOne = headOne.next;
        }
        if (headTwo) {
            sum += headTwo.value;
            headTwo = headTwo.next;
        }
        if (sum > 9) {
            currNode.next = new Node(sum % 10);
            sum = 1;
        } else {
            currNode.next = new Node(sum);
            sum = 0;
        }
        currNode = currNode.next;   
    }
    return head.next;

 }

 const a = new Node(2);
 const b = new Node(1);
 const c = new Node(5);
 a.next = b;
 b.next =  c;
 

 const d = new Node(5);
 const e = new Node(9);
 const f = new Node(2);
 d.next = e;
 e.next =  f;

 console.log(addLinkedList(a, d));
