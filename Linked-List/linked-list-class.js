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
        // if (this.head.next) {
        //     this.head = this.head.next;
        // }
        // else {
        //     this.head = null;
        // }

    }
}