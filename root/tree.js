class BstNode {
  constructor(element) {
    this.data = element;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.q = [];
    this.max_level = 0;
  }

  add(ele) {
    this.root = this.#addRecursive(ele, this.root);
  }
  #addRecursive(ele, root) {
    const temp = new BstNode(ele);
    if (root == null) {
      root = temp;
    } else if (root.data >= temp.data) {
      root.left = this.#addRecursive(ele, root.left);
    } else {
      root.right = this.#addRecursive(ele, root.right);
    }
    return root;
  }

  // height(){
  //     return this.#heightRecusive(this.root)
  // }
  height(root = this.root) {
    if (root == null) {
      return -1;
    }
    return (
      Math.max(this.height(root.left), this.height(root.right)) + 1
    );
  }

  levelOrder(root = this.root) {
    if(root == null){
        return;
    }
    this.q.push(root);
    while(this.q.length){
        let current = this.q.shift();
        console.log(current.data);
        if(current.left) this.q.push(current.left);
        if(current.right) this.q.push(current.right);
    }
  }

  leftView(root = this.root, level = 1) {
    if(root == null) {
        return;
    }

    if(this.max_level < level) {
        console.log(root.data);
        this.max_level = level;
    }
    this.leftView(root.left, level + 1);
    this.leftView(root.right, level + 1);
  }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(6);
tree.add(4);
tree.add(3);
tree.add(7);
tree.add(9);
tree.add(11);
// console.log(tree.height());
tree.leftView();
console.log(JSON.stringify(tree));
