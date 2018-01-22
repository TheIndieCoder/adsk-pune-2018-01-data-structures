const Queue = function() {
  const someInstance = {};
  var count = 0;
  var currentKey = -1;
  // Use an object with numeric keys to store values
  const storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    currentKey++;
    storage[currentKey] = value;  
  };

  someInstance.dequeue = function() {
    if(count >= 1) count--;

    var temp = storage[currentKey - count];
    delete storage[currentKey - count];
    
    return temp;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
