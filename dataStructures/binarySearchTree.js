//defining the node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val){
    var newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this
    } else{
      var current = this.root;

      while(true){
        if (val === current.val) return undefined;

        if (val < current.val){
          if (current.left === null){
            current.left = newNode;
            return this;
          } else{
            current = current.left;
          }
        } else if (val > current.val){
          if (current.right === null){
            current.right = newNode;
            return this;
          } else{
            current = current.right;
          }
        }
      }
    }
  }

  find(val){
    if (this.root === null) return false;

    var current = this.root;
    var found = false;

    while (current && !found){
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val){
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;

  }

  //this is hard coded for a BinarySearchTree but we can loop for childs
  BFS(){
    var data = [];
    var queue = [];
    var node = this.root;

    queue.push(node);

    while(queue.length){
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder(){
    var data = [];

    function traverse(node){
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  DFSPostOrder(){
    var data = [];

    function traverse(node){
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder(){
    var data[];

    function traverse(node){
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

}































var bst = new BinarySearchTree();
