class MaxHeap {
  #heap: number[] = [];

  constructor(arr: number[]) {
    this.#heap = [...arr];
  }

  /** 打印最小堆 */
  print() {
    console.log("heap is ", this.#heap);
  }

  /** 获取节点的左子节点 */
  #leftChild(index: number) {
    return (index << 1) + 1;
  }

  /** 获取节点的右子节点 */
  #rightChild(index: number) {
    return (index << 1) + 2;
  }

  /** 获取父节点 */
  #parent(index: number) {
    return (index - 1) >> 1;
  }

  get #size() {
    return this.#heap.length;
  }

  /** 交换数组中的两个值 */
  #swap(index1: number, index2: number) {
    [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
  }

  /** 上滤操作，将尾部新添加的元素堆化 */
  #siftUp(index: number) {
    let parentIndex = this.#parent(index);
    while (index > 0 && this.#heap[index] > this.#heap[parentIndex]) {
      this.#swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.#parent(index);
    }
  }

  /** 向数组的尾部添加一个元素 */
  push(value: number) {
    this.#heap.push(value);
    this.#siftUp(this.#size - 1);
  }

  /** 执行下滤操作，重新堆化 */
  #siftDown(index: number) {
    let leftChild = this.#leftChild(index);
    let rightChild = this.#rightChild(index);
    let lastIndex = this.#parent(this.#size - 1);

    while (index <= lastIndex) {
      let maxIndex = index;
      if (this.#heap[maxIndex] < this.#heap[leftChild]) maxIndex = leftChild;
      if (this.#heap[maxIndex] < this.#heap[rightChild]) maxIndex = rightChild;
      if (index === maxIndex) break;
      this.#swap(index, maxIndex);
      index = maxIndex;
      leftChild = this.#leftChild(index);
      rightChild = this.#rightChild(index);
    }
  }

  /** 取出堆顶元素 */
  pop() {
    // 交换首尾两个节点
    const res = this.#heap.shift();
    this.#heap.unshift(this.#heap.pop()!);
    this.#siftDown(0);
    return res;
  }
}

const maxHeap = new MaxHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
// maxHeap.push(11);
console.log("[ maxHeap.pop() ] >", maxHeap.pop());
maxHeap.print();

export { MaxHeap };
