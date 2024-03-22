import { btPrint } from "hy-algokit";
class TreeNode<T> {
  value: T = null;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
class BST<T> {
  private root: TreeNode<T> | null = null;

  print() {
    btPrint(this.root);
  }

  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  /**
   * 将一个节点插入到另一个节点中
   * @param node 要插入的父节点
   * @param newNode
   */
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      // 小于目标节点放到左边
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  /**
   * 先序遍历
   */
  preOrderTraverse() {
    const arr = [];
    const loop = (root) => {
      if (root === null) return;
      arr.push(root.value);
      loop(root.left);
      loop(root.right);
    };
    loop(this.root);
    console.log("先序遍历：", arr);
  }

  inOrderTraverse() {
    const arr = [];
    const loop = (root) => {
      if (root === null) return;
      loop(root.left);
      arr.push(root.value);
      loop(root.right);
    };
    loop(this.root);
    console.log("中序遍历：", arr);
  }

  postOrderTraverse() {
    const arr = [];
    const loop = (root) => {
      if (root === null) return;
      loop(root.left);
      loop(root.right);
      arr.push(root.value);
    };
    loop(this.root);
    console.log("后序遍历：", arr);
  }

  levelOrderTraverse() {}

  maxValue(): T | null {
    let rightNode = this.root;
    while (rightNode && rightNode.right) {
      rightNode = rightNode.right;
    }
    return rightNode.value ?? null;
  }

  minValue(): T | null {
    let leftNode = this.root;
    while (leftNode && leftNode.left) {
      leftNode = leftNode.left;
    }

    return leftNode.value ?? null;
  }

  search(value: T): boolean {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      else if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }
}

const bst = new BST<number>();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

bst.print();

bst.preOrderTraverse();
bst.inOrderTraverse();
bst.postOrderTraverse();

console.log(bst.maxValue());
console.log(bst.minValue());
console.log(bst.search(9));
console.log(bst.search(90));
export {};
