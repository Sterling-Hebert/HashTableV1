const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let shah = sha256(key).slice(0, 8);
    let parsed = parseInt(shah, 16);
    return parsed;
  }

  hashMod(key) {
    return this.hash(key) % this.data.length;
  }

  insertNoCollisions(key, value) {
    let index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);
    if(!this.data[index]){
      this.data[index] = newPair;
      this.count++;
    } else {
      throw new Error('hash collision or same key/value pair already exists!')
    }
   }

  insertWithHashCollisions(key, value) {
    let index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);
    if(!this.data[index]){
      this.data[index] = newPair;
      this.count++;
    } else {

    }
   }
  

  insert(key, value) {

  }
}

module.exports = HashTable;
