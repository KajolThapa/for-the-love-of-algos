/**
 * Write a function that takes in the head of two Singly Linked Lists that are in sorted order, respectively. The function should merge 
 * the lists in place, i.e, it shouldn't create a brand new list) and return the head of the merged list, the merged list should be in sorted order.
 * 
 * Assume: the input linked lists will always have at least one node
 * 
 * Sample Input:
 *      headOne:  2 -> 6 -> 7 -> 8     //head with a value 2
 *      headTwo:  1 -> 3 -> 4 -> 5 -> 9 -> 10    //head with a value 1
 * 
 * Sample OutPut: 
 *      1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
 */

 function Node(value) {
     this.value = value;
     this.next = null;
 }

 // Time O(n + m)  |  Space(O(1))  where n, m are length of first & second linked List respectively
 function mergeLinkedLists(headOne, headTwo) {
     let p1Prev = null;
     let p1 = headOne;
     let p2 = headTwo;
     while (p1 !== null && p2 !== null) {
         if (p1.value < p2.value) {
             p1Prev = p1;
             p1 = p1.next;

         } else {
             if (p1Prev !== null) p1Prev.next = p2;
                 p1Prev = p2;
                 p2 = p2.next;
                 p1Prev.next = p1;  
         }
     }
     if (p1 === null) p1Prev.next = p2;
     return headOne.value < headTwo.value ? headOne : headTwo;
 }

 const two = new Node('2');
 const six = new Node('6');
 const seven = new Node('7');
 const eight = new Node('8');

 two.next = six;
 six.next = seven;
 seven.next = eight;

 const one  = new Node('1');
 const three = new Node('3');
 const four = new Node('4');
 const five = new Node('5')
 const nine  = new Node('9');
 const ten = new Node('10');

 one.next = three;
 three.next = four;
 four.next = five;s
 five.next = nine;
 nine.next = ten;

//  console.log(mergeLinkedLists(two, one));