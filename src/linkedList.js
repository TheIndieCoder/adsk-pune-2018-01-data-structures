const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let _node = Node(value);
    if(list.head){
      list.tail.next = _node;
      list.tail = list.tail.next;
    } else {
      list.head = _node;
      list.tail = _node;
      list.head.next = list.tail;
    }
  };

  list.removeHead = function() {
    let ret = list.head.value;
    let temp = list.head.next;
    delete list.head;
    list.head = temp;
    return ret;
  };

  list.contains = function(target) {
    let find = function(node, target) {
      if(node){
        if(node.value === target){
          return true;
        } 
        else{
          return find(node.next, target);
        }
      }
      else {
        return false;
      }
      
    }

    return find(list.head, target);
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinkedList;
}
