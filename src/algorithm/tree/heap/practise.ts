class MHeap<T> {
  #heap: T[] = [];

  constructor(heap) {
    // 建堆 - 堆化
    this.#heap = [...heap];
    for (let i = this.#parent(heap.length - 1); i >= 0; i--) {
      this.#siftDown(i);
    }
  }

  print() {
    console.log("heap:", this.#heap);
  }

  /** 左子节点 i 乘 2 加 1 */
  #left(index: number) {
    return (index << 1) + 1;
  }

  /** 右子节点 i 乘 2 加 2 */
  #right(index: number) {
    return (index << 1) + 2;
  }

  /** (i - 1) / 2 向下取整 */
  #parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  // 8
  // 左 17  -  右 18
  // (17 - 1) / 2  -  (18 - 1) / 2

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
  }

  #siftUp(index: number) {
    let parentIndex;
    while (true) {
      parentIndex = this.#parent(index);
      if (parentIndex < 0 || this.#heap[index] <= this.#heap[parentIndex]) break;
      this.#swap(parentIndex, index);
      index = parentIndex;
    }
  }

  #siftDown(index: number) {
    while (true) {
      let leftIndex = this.#left(index);
      let rightIndex = this.#right(index);
      let max = index;
      if (leftIndex < this.size && this.#heap[leftIndex] > this.#heap[max]) max = leftIndex;
      if (rightIndex < this.size && this.#heap[rightIndex] > this.#heap[max]) max = rightIndex;

      if (max === index) break;
      this.#swap(max, index);
      index = max;
    }
  }

  get size() {
    return this.#heap.length;
  }
  /** 通过堆底添加一个元素 */
  push(value: T) {
    let index = this.size;
    this.#heap[index] = value;
    this.#siftUp(index);
  }

  /** 从堆顶取出元素 */
  pop() {
    this.#swap(0, this.size - 1);
    const top = this.#heap.pop();
    this.#siftDown(0);
    return top;
  }
}
// [8, 6, 7, 5, 4]
const heap = new MHeap([10, 8, 20, 3, 9, 7]);
heap.print();
// heap.push(30);
// heap.print();
heap.pop();
heap.print();
