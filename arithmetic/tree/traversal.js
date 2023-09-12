// 树的遍历
// 前序遍历 - PreOrder
// 中序遍历 - InOrder
// 后序遍历 - PostOrder
const data = {
  value: "A",
  left: {
    value: "B",
    left: {
      value: "D",
      left: {
        value: "H",
        left: null,
        right: null
      },
      right: {
        value: "I",
        left: null,
        right: null
      }
    },
    right: {
      value: "E",
      left: null,
      right: null
    }
  },
  right: {
    value: "C",
    left: {
      value: "F",
      right: null,
      left: null
    },
    right: {
      value: "G",
      left: {
        value: "J",
        left: null,
        right: null
      },
      right: null
    }
  }
}

// 递归法
// 前序遍历 - 
const preOrderTraversal = (root) => {
  const result = [];
  const traversal = (node) => {
    if(node !== null) {
      result.push(node.value);
      traversal(node.left);
      traversal(node.right);
    }
  }
  traversal(root);
  return result;
}
console.log('递归-先序遍历：',preOrderTraversal(data))

// 中序遍历
const inOrderTraversal = (root) => {
  const result = [];
  const traversal = (node) => {
    if(node !== null) {
      traversal(node.left);
      result.push(node.value);
      traversal(node.right);
    }
  }
  return result;
}

// 后序遍历
const postOrderTraversal = (root) => {
  const result = [];
  const traversal = (node) => {
    if(node !== null) {
      traversal(node.left);
      traversal(node.right);
      result.push(node.value);
    }
  }
  return result;
}