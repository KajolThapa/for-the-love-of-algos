/**
 * Write a function that takes in the head of a Singly Linked List and an integer k and removes the kth node from the end of the list.
 * The removal should be done in place, meaning that the original data structure should be mutated (no new structure should be created).
 * 
 * Furthermore, the input head of the linkedlist should remain the head after the removal is done, even if the head is the node that's supposed to
 * be removed. In other words, if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.
 * 
 * Sample Input:
 *  Singly Linked List 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9     
 *  k = 4
 * 
 * Sample Output:  Singly Linked List 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9     
 */
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Time O(n)  | Space O(1)
function removeKthNodeFromLast(head, k) {
    let first = head;
    let second = head;
    let counter = 1;
    while (counter <= k) {
        second = second.next;
        counter += 1;  
    }
    if (second === null) { //check if kth node is head
        head.value = head.next.value;
        head.next = head.next.next;
    }
    while (second !== null) { 
        second = second.next;
        first = first.next;
    }
    first.next = first.next.next; // second is at last node(before null), first is before kth Node. 
}
