const _ = require('underscore');

const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let obj = {count : 0, currentKey : -1, storage : {}};
  _.extend(obj, stackMethods);
  return obj;
};

const stackMethods = {
  push : function(value) {
    this.count++;
    this.currentKey++;
    this.storage[this.currentKey] = value;  
  },

  pop : function() {
    if(this.count >= 1) {
      this.count--;
    }    
    var temp = this.storage[this.currentKey];
    delete this.storage[this.currentKey];
    this.currentKey =+ 1;
    return temp;
  },

  size : function() {
    return this.count;
  }
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
