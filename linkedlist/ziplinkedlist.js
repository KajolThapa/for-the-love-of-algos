/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */
 function LinkedList(val) {
     this.val = val;
     this.next = null;
 }
 
 function zip(l1,l2) {
     if (l1 === undefined) return l2;
     if (l2 === undefined) return l1;

     let mainCurr = l1;
     let secondCurr = l2;

     while (secondCurr) {
         if (mainCurr.next) {
             temp = mainCurr.next;
             mainCurr.next = secondCurr;
             secondCurr = secondCurr.next;
             mainCurr.next.next = temp;
             mainCurr = mainCurr.next.next;
         }
         else {
             mainCurr.next = secondCurr;
             return;
         }
        }
     return mainCurr;
 }

 const firstLL =new  LinkedList("A");
 firstLL.next = new LinkedList("B");
 firstLL.next.next = new LinkedList("C");
 console.log("firstLL",firstLL);

 const secondLL =new  LinkedList("1");
 secondLL.next = new LinkedList("2");
 secondLL.next.next = new LinkedList("3");
 console.log("secondLL",secondLL);

zip(firstLL,secondLL);

 module.exports = { LinkedList, zip};