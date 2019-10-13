/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */
function LinkedList(val) {
    this.val = val;
    this.next = null;
}

function reverseLinkedList(head) {
    let curr = head;
    let next = null;
    let prev = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

const firstLL = new LinkedList("A");
const secLL = new LinkedList("B");
firstLL.next = secLL;
const thirdLL = new LinkedList("C");
thirdLL.next = new LinkedList("D");
secLL.next = thirdLL;
console.log(reverseLinkedList(firstLL));
