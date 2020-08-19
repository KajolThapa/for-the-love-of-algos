//Using Recurrsion
// At Average time & space both will be O(log(n)) - as we eliminate half of the tree in each traversal
//At worst, O(n) time & space

class BST {
    constructor(value) {
        this.value = value;
        this.left = null; 
        this.right = null;

    }
    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }

        } else {
            if (this.right === null) {
                this.right = new BST(value)
            } else {
                this.right.insert(value);
            }
        }
        return this;
    }

    contains(value) {
        if (value < this.value) {
            if (this.left === null) {
                return false;
            } else {
               return this.left.contains(value);
            }
        } else if (value > this.value) {
            if (this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        } else {
            return true;
        }
    }

    // to remove value, we have to find the smallest left most value from right subtree of given node and replace it with the value we want to remove it
    remove(value, parent = null) {
        if (value < this.value) { //case1
            if (this.left !== null) {
                this.left.remove(value, this)
            }
        } else if (value > this.value) { //case2
            if (this.right !== null) {
                this.right.remove(value, this)
            }
        } else {
            if (this.left !== null && this.right !== null) { //case 3.1
                this.value = this.right.getMinValue();  // setting current nodevalue to smallest value of right subtree
                this.right.remove(this.value, this)    // have to remove that node we just found passing currentNode as parentNode
            } else if (parent === null) {             // case 3.2  when node that has no parentNode, example rootNode
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                } else {

                    //edgecase if BST only has oneNode - rootNode - do nothing
                }
            } else if (parent.left === this) {       // case 3.3  where node only has either one childNode, or no childrenNodes 
                parent.left = this.left !== null ? this.left : this.right;            
            } else if (parent.right === this) { //case 3.4 when currentNode is rightNode of parentNode
                parent.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }

    getMinValue() {
        if (this.left === null) {
            return this.value;
        } else {
            return this.left.getMinValue();
        }

    }
}