class Stack {
    constructor() {
        this.storage = {};
        this.index = 0;        
    };
    push(value) {
        this.storage[this.index] = value;
        this.index += 1;
    };
    pop() {
        const lastElement = this.storage[this.index - 1]
        delete this.storage[this.index - 1];
        this.index -= 1;   
        return lastElement;
    };
    getMax() {
        let max = -Infinity;
        for (const key in this.storage) {
            if (this.storage[key] === max || this.storage[key] > max) {
                max = this.storage[key];
            }
        }
        return max;
    }
}

const newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
console.log(newStack);
console.log(newStack.getMax());
console.log(newStack.pop());
// console.log(newStack.pop());
console.log(newStack);
