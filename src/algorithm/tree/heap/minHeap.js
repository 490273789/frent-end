const siftDown = (arr, startIndex, endIndex) => {
  const leftChildIndex = startIndex * 2 + 1;
  const rightChildIndex = startIndex * 2 + 2;
  let minIndex = startIndex;
  let tempNode = arr[startIndex];
  if (leftChildIndex <= endIndex && arr[leftChildIndex] < tempNode) {
    tempNode = arr[leftChildIndex];
    minIndex = leftChildIndex;
  }

  if (rightChildIndex <= endIndex && arr[rightChildIndex] < tempNode) {
    tempNode = arr[rightChildIndex];
    minIndex = rightChildIndex;
  }
  if (minIndex !== startIndex) {
    // 交换节点
    // arr[minIndex] = arr[startIndex];
    // arr[startIndex] = tempNode;
    [arr[minIndex], arr[startIndex]] = [arr[startIndex], tempNode];
    siftDown(arr, minIndex, endIndex);
  }
};

const buildMinHeap = (arr) => {
  if (arr.length < 2) return;
  // 找到最后一个叶子节点的父节点
  const startIndex = Math.floor((arr.length - 1) / 2);
  // 堆序化
  for (let i = startIndex; i >= 0; i--) {
    siftDown(arr, i, arr.length - 1);
  }
};

const minHeapSort = (arr) => {
  buildMinHeap(arr);
  console.log(arr);
  // 排序
  let lastIndex = arr.length - 1;
  while (lastIndex >= 0) {
    [arr[0], arr[lastIndex]] = [arr[lastIndex], arr[0]];
    siftDown(arr, 0, --lastIndex);
  }
};

const arr = [5, 8, 0, 10, 4, 6, 1];
minHeapSort(arr, 0, arr.length - 1);
console.log(arr);

// 交换变量a和b
let a = 1,
  b = 2;

let temp;
temp = a;
a = b;
b = temp;
