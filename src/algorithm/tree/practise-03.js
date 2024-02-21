// N叉树的后序遍历
// 用递归
const postOrder = (root) => {
  const result = [];
  const traversal = (node) => {
    if(node !== null) {
      node.children?.foreach((element) => {
        traversal(element);
      })
      result.push(node.value)
    }
  }
  traversal(root);
  return result;
}

// 用栈来迭代
const postOrderTraversal = (root) => {
  const result = [];
  const stack = [root];
  
  while(stack.length) {
    const current = stack.pop();
    result.push(current.value);
    for(let i = current.children.length - 1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
  }
  return result.reverse;
}