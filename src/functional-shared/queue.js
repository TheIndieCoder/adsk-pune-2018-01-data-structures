const _ = require('underscore');

const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let obj = {count : 0, currentKey : -1, storage : {}};
  _.extend(obj, queueMethods);
  return obj;
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
}
