class Stack {
  constructor(){
    this.count = 0;
    this.currentKey = -1;
    this.storage = {};  
  };

  push(value) {
    this.count++;
    this.currentKey++;
    this.storage[this.currentKey] = value;  
  };

  pop() {
    if(this.count >= 1) {
      this.count--;
    }    
    var temp = this.storage[this.currentKey];
    delete this.storage[this.currentKey];
    this.currentKey =+ 1;
    return temp;
  };

  size() {
    return this.count;
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
