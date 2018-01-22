class Queue {
  constructor(){
    this.count = 0;
    this.currentKey = -1;
    this.storage = {};
  };

  enqueue(value){
    this.count++;
    this.currentKey++;
    this.storage[this.currentKey] = value;  

  };

  dequeue() {
    if(this.count >= 1) this.count--;

    var temp = this.storage[this.currentKey - this.count];
    delete this.storage[this.currentKey - this.count];
    
    return temp;
  };

  size() {
    return this.count;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
