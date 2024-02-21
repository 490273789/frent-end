// 二叉树
// 二叉树的基本单元是节点，每个节点包含：值、左子节点引用、右子节点引用
function TreeNode(value, left, right) {
  this.value = value === undefined ? 0 : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 二叉树常见术语
// 根节点（root node）：位于二叉树的顶层，妹没有父节点
// 叶节点（leaf node）：没有子节点，其两个指针均指向null
// 边（edge）：连接两个节点的线段，即节点的引用（指针）
// 层（level）：从顶层至底层递增，根节点为1
// 节点的 度（degree）：节点子节点的数量，二叉树中取值范围是0、1、2
// 二叉树的 高度（height）：从根节点到最远叶节点的边的数量
// 节点的 深度（depth）：从根节点到该节点所经过的边的数量
// 节点的 高度（height）： 从最远叶节点到该节点所经过边的数量

// 二叉树的基本操作
/* 初始化二叉树 */
// 初始化节点
let n1 = new TreeNode(1),
  n2 = new TreeNode(2),
  n3 = new TreeNode(3),
  n4 = new TreeNode(4),
  n5 = new TreeNode(5);
// 构建引用指向（即指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

/** 插入与删除节点 */
// 插入
let n0 = new TreeNode(0);
n1.left = n0;
n0.left = n2;
// 删除
n1.left = n2;

// 二叉树类型
// 完美二叉树 - 满二叉树
// 完全二叉树 - 只有最底层的节点未被填满，且最底层节点尽量靠左填充。
// 满二叉树 - 除了叶节点之外，其余所有节点都有两个子节点
// 平衡二叉树 - 任意节点的左子树和右子树的高度之差的绝对值不超过 1 。

// 二叉树退化
// 当二叉树的每层节点都被填满时，达到“完美二叉树”；而当所有节点都偏向一侧时，二叉树退化为“链表”。
// console.log(n1);
// 层遍历 - 广度优先 breadth first traversal
// 递归
const levelOrder = (root) => {
  const result = [];
  const queue = [root];

  while (queue.length) {
    let node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
};

console.log(levelOrder(n1));

// 前、中、后
const preOrder = (root) => {
  const result = [];
  const dfs = (node) => {
    if (node === null) return;
    result.push(node.value);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return result;
};

// 中序遍历 - 左节点-父节点-右节点
// 处理完左子节点 - 处理父节点 - 处理右子节点
const inOrder = (root) => {
  const result = [];
  const dfs = (node) => {
    if (node === null) return;
    dfs(node.left);
    result.push(node.value);
    dfs(node.right);
  };
  dfs(root);
  return result;
};

// 后序遍历 - 左节点-右节点-父节点
// 处理左子节点 - 处理右子节点 - 处理父节点
const postOrder = (root) => {
  const result = [];
  const dfs = (node) => {
    if (node === null) return;
    dfs(node.left);
    dfs(node.right);
    result.push(node.value);
  };
  dfs(root);
  return result;
};

console.log(preOrder(n1));
console.log(inOrder(n1));
console.log(postOrder(n1));
