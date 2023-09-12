// 比较两颗二叉树相同
// 结构相同，节点的的值相同

const isSameTree = (root1, root2) => {
  const traversal = (root1, root2) => {
    if (root1 === null && root2 !== null) return false;
    else if (root1 !== null && root2 === null) return true;
    else if (root1 === null && root2 === null) return true;
    else {
      return (
        root1.value === root2.value &&
        traversal(root1.left, root2.left) &&
        traversal(root1.right, root2.right)
      );
    }
  };
  return traversal(root1, root2);
};

// 翻转二叉树 - 将左节点和右节点未知互换
const invertTree = (root) => {
  const traversal = (node) => {
    if(node === null) return null
    else {
      [node.left, node.right] = [traversal(node.right), traversal(node.left)]
    }

    return node
  }
  return traversal(root)
}

