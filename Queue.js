class Queue {
    constructor() {
        this.storage = {};
        this.index = 0;
    }
    enqueue(value) {
        this.storage[this.index] = value;
        this.index += 1;     
    }
    dequeue() {
        const firstElement = this.storage[0];
        delete this.storage[0];
        for (let i = 0; i < this.index; i += 1) {
            this.storage[i] = this.storage[i+1];
        }
        this.index -= 1;
        return firstElement;
    }
}

const newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
console.log(newQueue);
console.log(newQueue.dequeue());
console.log(newQueue);
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue);
