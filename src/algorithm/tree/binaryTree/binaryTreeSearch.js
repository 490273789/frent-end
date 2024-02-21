// 二叉树搜索
// 对于根节点，左子树中所有节点的值 < 根节点的值 < 右子树中所有节点的值。
// 任意节点的左、右子树也是二叉搜索树，即同样满足条件 1. 。
function TreeNode(value, left, right) {
  this.value = value === undefined ? 0 : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const binaryTreeSearch = (num, root) => {
  let current = root;
  while (current !== null) {
    if (current.value < num) current = current.right;
    else if (current.value > num) current = current.left;
    // 找到目标节点
    else break;
  }
  return current;
};

const insertTreeNode = (num, root) => {
  let current = root;
  let pre;
  if (current === null) {
    toot = new TreeNode(num);
    return;
  }
  while (current !== null) {
    if (current.value === num) return;
    pre = current;
    if (current.value < num) current = current.right;
    else current = current.left;
  }
  const node = new TreeNode(num);
  if (pre.value < num) pre.right = node;
  else pre.left = node;
};
