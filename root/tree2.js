class BstNode {
  constructor(element) {
    this.data = element;
    this.left = null;
    this.right = null;
  }
}

let root = new BstNode(10);
root.left = new BstNode(5);
root.left.left = new BstNode(3);
root.left.right = new BstNode(7);
root.right = new BstNode(15);
root.right.left = new BstNode(12);
root.right.right = new BstNode(16);

// console.log(JSON.stringify({ root }));
console.log(isBinarySearchTreeBound(root, Number.MIN_VALUE, Number.MAX_VALUE));
function isBinarySearchTreeBound(root, lower, upper) {
  if (root == null) return true;
  if (root.data > lower && root.data < upper &&
    isBinarySearchTree(root.left, lower, root.data) &&
    isBinarySearchTree(root.right, root.data, upper)
  )
    return true;
  else return false;
}

function isBinarySearchTree(root) {
  if (root == null) return true;
  if (
    isSubtreeLesser(root.left, root.data) &&
    isSubtreeGreater(root.right, root.data) &&
    isBinarySearchTree(root.left) &&
    isBinarySearchTree(root.right)
  )
    return true;
  else return false;
}
function isSubtreeLesser(root, value) {
  if (root == null) return true;
  if (
    root.data < value &&
    isSubtreeLesser(root.left, value) &&
    isSubtreeLesser(root.right, value)
  )
    return true;
  else return false;
}
function isSubtreeGreater(root, value) {
  if (root == null) return true;
  if (
    root.data > value &&
    isSubtreeGreater(root.left, value) &&
    isSubtreeGreater(root.right, value)
  )
    return true;
  else return false;
}
