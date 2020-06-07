//piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {

      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index){
    if (index < 0 || index >= this.length) return null;

    var count = 0;
    var current = this.head;
    while (count !== index){
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val){
    var foundNode = this.get(index);

    if (foundNode){
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prevNode = this.get(index - 1);
    var temp = prevNode.next;

    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index){
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var prevNode = this.get(index - 1);
    var removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;

    return removed;
  }

  reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next = null;

    for (var i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

}























var list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!");
list.push("hahahha");
console.log(list);
list.pop();
console.log(list);
