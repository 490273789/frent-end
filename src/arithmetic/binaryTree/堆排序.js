// 完全二叉树,只允许最后一行可以不满,最后一行必须从左往右,最后一行元素间不能有间隔

// 堆序性
// 1. 大根堆 所有父节点的值>=子节点
// 2. 小根堆 所有子节点的值<=子节点

// 逻辑结构为树
// 存储结构为数组

// 堆的存储
// 用数组实现堆
// 层序遍历将完全二叉树放到数组中
// 堆的基本操作
// 将树转成堆
// 1.下滤  O(logN):从根节点向下调整的操作
// 用途:任意元素插入头部,使用下滤将树重新构建为堆
// 复杂度为O(logN)
// 可以将树重建成堆

// 2. 上滤 O(logN)
// 用途,任意元素插入到尾部,使用上滤将树重新构建为堆
// 复杂度为O(logN)
// 可以将树重建成堆

// 建堆
// 1. 自顶向下 - 上滤
//  O(logN)
// 1. 自底向上 - 下滤
// o(N)
// 找出最后叶子节点的父节点,完成一次堆序性,依次向上完成

// 应用:优先队列
// 插入队列
// 弹出最小元素
// 小根堆实现
// 方法
// 第一步: 将根节点弹出队列
// 第二步: 将最后一个叶子节点放到根节点
// 第三步: 将根节点进行下滤操作,重新堆序性
// 弹出操作的复杂度为O(logN)
// 插入操作 - 上滤
// 复杂度O(logN)
/**
 * 堆化
 * @param {*} tree 树
 * @param {*} n 树的总节点数
 * @param {*} i 第几个节点做操作
 */
const heapify = (tree, n, i) => {
  if (i >= n) return;
  let lNode = 2 * i + 1;
  let rNode = 2 * i + 2;
  let max = i;
  if (lNode < n && tree[lNode] > tree[max]) max = lNode;
  if (rNode < n && tree[rNode] > tree[max]) max = rNode;
  if (max != i) {
    [tree[max], tree[i]] = [tree[i], tree[max]];
    heapify(tree, n, max);
  }
};

/**
 * 构建一个堆
 * @param {*} tree 源数据
 * @param {*} n 源数据的长度
 */
const buildHeapily = (tree, n) => {
  const lastNode = n - 1;
  let parentNode = Math.floor((lastNode - 1) / 2);
  do {
    heapify(tree, n, parentNode);
  } while (parentNode-- > 0);
};

// 堆排序,不改变原堆
const heapSort = (heap) => {
  const result = []; // 缓存结果
  let i = heap.length - 1;

  while (i >= 0) {
    [heap[0], heap[i]] = [heap[i], heap[0]];
    result.unshift(heap[i]);
    buildHeapily(heap, i--);
  }
  return result;
};

// 堆排序,省空间
const heapSort1 = (heap) => {
  let i = heap.length - 1;

  while (i >= 0) {
    [heap[0], heap[i]] = [heap[i], heap[0]];
    buildHeapily(heap, i--);
  }
};

const tree1 = [2, 5, 3, 1, 10, 4];
buildHeapily(tree1, tree1.length);
console.log(heapSort(tree1));

const tree2 = [2, 5, 3, 1, 10, 4];
buildHeapily(tree2, tree2.length);
heapSort1(tree2);
console.log(tree2);
