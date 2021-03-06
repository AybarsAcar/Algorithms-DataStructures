//defining the node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//Defining the DoublyLinkedList
class DoublyLinkedList() {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    newNode = new Node(val);

    if (!head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      var count = 0;
      var current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while (count !== index){
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(index, val){
    var foundNode = get(index);

    if (foundNode){
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(val);
      if (index === this.length) retun !!this.push(val);

      var newNode = new Node(val);
      var beforeNode = this.get(index - 1);
      var afterNode = beforeNode.next;

      beforeNode.next = newNode;
      newNode.prev = beforeNode;

      newNode.next = afterNode;
      afterNode.prev = newNode;

      this.length++;
      return true;
  }

  remove(index){
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();

    var removedNode = this.get(index);
    var prevNode = removedNode.prev;
    var nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

}



























let list = new DoublyLinkedList();
