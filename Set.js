class mySet {
    constructor() {
        this.hash = {};
        this.index = 0;
    }
    add(value) {
        if (!(Object.values(this.hash).includes(value))) {
            this.hash[this.index] = value
            this.index += 1;
        }
    }
    remove(value) {
       for (const key in this.hash) {
           if (this.hash[key] === value) {
               for (let i = parseInt(key); i < this.index-1; i++) {
                   this.hash[i] = this.hash[i+1];
               }
               delete this.hash[this.index-1];
               this.index--;
               return true;
           }
              
       }
       return false;
    }
}

const set1 = new mySet();
set1.add('h');
set1.add('e');
set1.add('l');
set1.add('l');
set1.add('o');
console.log(set1);
console.log(set1.remove('l'));
console.log(set1);
console.log(set1.index)