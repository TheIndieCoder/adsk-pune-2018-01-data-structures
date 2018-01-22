const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.currentKey = -1;
  obj.storage = {};
  return obj
};

const queueMethods = {
  enqueue : function(value){
    this.count++;
    this.currentKey++;
    this.storage[this.currentKey] = value;  

  },

  dequeue : function() {
    if(this.count >= 1) this.count--;

    var temp = this.storage[this.currentKey - this.count];
    delete this.storage[this.currentKey - this.count];
    
    return temp;
  },

  size : function() {
    return this.count;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'queueMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: queueMethods
  });
}
