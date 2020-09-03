/**
* HashTable costructor
*
* construct a new hash table
*
* - You may modify this constructor as you need to achieve the challenges below.
*/
function HashTable() {
    this.SIZE = 16;
    this.count = 0;
    this.storage = new Array(this.SIZE);
  }
  
  /**
  * set - Adds given value to the hash table with specified key.
  *
  * - If the provided key has already been used to store another value, simply overwrite
  *   the existing value with the new value.
  * - If the hashed address already contains another key/value pair, you must handle
  *   the collision appropriately.
  *
  * @param {string} key - key to be used to create hashed address
  * @param {string|number|boolean} value - value to be stored in hash table
  * @return {number} The new number of items stored in the hash table
  */
  /**  <==================================== USING LINKEDLIST =======================================> */
  // class LinkedList {
  //   constructor() {
  //     this.head = null;
  //     this.tail = null;
  //   }
  
  // }
  // class Node {
  //   constructor(key, value) {
  //     this.key = key;
  //     this.value = value;
  //   }
  //   toString() { //helper method to query entire object
  //     return `${this.key} => ${this.value}`
  //   }
  // }
  // HashTable.prototype.set = function(key, value) {
  //   let hashKey = hashCode(key, this.SIZE);
  //   if (this.storage[hashKey] === undefined){ //if that index is empty
  //     const newNode = Node(key, value);
  //     newNode.next = null;
  //     const ll = new LinkedList();
  //     ll.head = newNode;
  //     ll.tail = null;
  //   }
  // }
    /**
     * 
     * <========== USING OBJECTS ===========>*/
     HashTable.prototype.set = function(key, value) {
     let index = hashCode(key, this.SIZE);
    if (this.storage[index] === undefined) {
      const bucket = {};
      bucket[key] = value;
      this.storage[index] = bucket;
      this.count += 1;
    }
    else {
      if (!this.storage[index].hasOwnProperty(key)) {
        this.storage[index][key] = value;
        this.count += 1;
      }
      else {
        this.storage[index][key] = value; // handles collision using objects
      }
    }
    return this.count;
    
   };
  
  /**
  * get - Retrieves a value stored in the hash table with a specified key
  *
  * - If more than one value is stored at the key's hashed address, then you must retrieve
  *   the correct value that was originally stored with the provided key
  *
  * @param {string} key - key to lookup in hash table
  * @return {string|number|boolean} The value stored with the specifed key in the
  * hash table
  */
  HashTable.prototype.get = function(key) {
    //run hashCode on key
      //returns an index
      //iterate through that index value which is object
      //find the key and return tha value for that key
    let index = hashCode(key, this.SIZE);
    if (!this.storage[index]) {
      return undefined;
    }
    return this.storage[index][key]
  };
  /**
  * remove - delete a key/value pair from the hash table
  *
  * - If the key does not exist in the hash table, return undefined
  *
  * @param {string} key - key to be found and deleted in hash table
  * @return {string|number|boolean} The value deleted from the hash table
  */
  HashTable.prototype.remove = function(key) {
    let value = this.get(key);
    let hashKey = hashCode(key, this.SIZE);
    if (!this.storage[hashKey]) {
      return undefined;
    }
   else if (!this.storage[hashKey].hasOwnProperty(key)) {
     console.log('no key');
      return undefined;
    }
    else {
            delete this.storage[hashKey][key];  
    }
    return value;
  };
  
  
  // Do not modify
  function hashCode(string, size) {
    'use strict';
    
    let hash = 0;
    if (string.length === 0) return hash;
    
    for (let i = 0; i < string.length; i++) {
      const letter = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + letter;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    return Math.abs(hash) % size;
  }
  // const hash = new HashTable();
  //  hash.set('1', 1 );
  //  hash.set('11', "a");
  // //  console.log(hash.remove("1"));
  // //  console.log(hash.remove("1"));
  // //  console.log(hash.get('3'));
  // hash.set('20', 20 );
  // hash.set('21', 21 );
  // hash.set('22', 22 );
  // hash.set('23', 23 );
  console.log(hash);
  console.log(hash);
  // hash.get('12');
  // hash.get('200');s
  //  console.log(hash.remove('12'));
  //  console.log(hash);
  //  console.log(hash.remove('12'));
   
  // hash.remove('2');
  // hash.remove('3');
  // hash.remove('4');
  // hash.remove('5');
  // hash.remove('6');
  // hash.remove('7');
  // hash.remove('8');
  // hash.remove('9');
  // hash.remove('10');
  // hash.remove('11');
  // hash.remove('12');
  // hash.remove('13');
  // hash.remove('14');
  // hash.remove('15');
  // hash.remove('16');
  // hash.remove('17');
  // hash.remove('18');
  // hash.remove('19');
  // hash.remove('20');
  // hash.remove('21');
  // hash.remove('22');
  // hash.remove('23');