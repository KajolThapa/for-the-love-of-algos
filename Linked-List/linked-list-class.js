class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    inserFirst(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter += 1;
            node = node.next;
        }
        return counter;
    }
    getFirst() {
        if (!this.head) {return;}
        return this.head;
        
    }
    getLast() {
        if (!this.head) {return;}
        let node = this.head;
        while(node) { 
            if (!node.next) {
                return node;
            }
            node = node.next
        }
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) {return;}
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) {return ;}
        if (!this.head.next) {this.head = null;}
        let prev = this.head;
        let node = this.head.next;
        while(node.next) {
           prev = node;
           node = node.next
        }
        prev.next = null;
    }
    insertLast(data) {
        //use getLast to get last node
        const last = this.getLast();
        if (last) {
            //there are some existing nodes in our chain
            last.next = new Node(data);

        } else {
            //the chain is empty
            this.head = new Node(data);
        }

    }

    //General
    getAt(index) {
        let counter = 0;
        let node = this.head
        while (node) {
            if (counter === index) {
                return node;
            }
            counter += 1;
            node = node.next;
        }
        return null; // if the index is outof bound
    }
    removeAt(index) {
        if (!this.head) {return;}
        if (index === 0) {this.head = this.head.next;}
        const prev = this.getAt(index - 1);
        if (!prev || !prev.next) {return;}
        prev.next = prev.next.next;
       
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast(); //to handle outof bound index
        const node = new Node(data, prev.next);
        prev.next = node;
    }
    
}

const ll = new LinkedList();
ll.head = new Node(5);
ll.head.next = new Node(6);
ll.head.next.next = new Node(7);
ll.inserFirst(4);
ll.insertLast(8);
console.log(ll);

console.log(ll.getLast());
