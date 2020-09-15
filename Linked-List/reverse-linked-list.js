/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */
// Time O(n)   |   Space O(1)
function LinkedList(val) {
    this.val = val;
    this.next = null;
}

function reverseLinkedList(head) {
    let currentNode = head;
    let previousNode = null;
    while (currentNode) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
}

const firstLL = new LinkedList("A");
const secLL = new LinkedList("B");
firstLL.next = secLL;
const thirdLL = new LinkedList("C");
thirdLL.next = new LinkedList("D");
secLL.next = thirdLL;

console.log(firstLL);
console.log(reverseLinkedList(firstLL));
