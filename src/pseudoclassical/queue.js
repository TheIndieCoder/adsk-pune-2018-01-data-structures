const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.currentKey = -1;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
    this.count++;
    this.currentKey++;
    this.storage[this.currentKey] = value;  

  };

  Queue.prototype.dequeue = function() {
    if(this.count >= 1) this.count--;

    var temp = this.storage[this.currentKey - this.count];
    delete this.storage[this.currentKey - this.count];
    
    return temp;
  };

  Queue.prototype.size = function() {
    return this.count;
  };



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
