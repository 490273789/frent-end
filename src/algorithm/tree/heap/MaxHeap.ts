/** 最大堆的实现 */

class MaxHeap<T> {
  /** 队列 */
  #maxHeap = [];

  constructor(numbers: number[]) {
    this.#maxHeap = numbers === undefined ? [] : [...numbers];
    for (let i = this.#parent(this.size - 1); i >= 0; i--) {
      this.#siftDown(i);
    }
  }
  /**
   * 获取当前节点的左子节点索引
   * @param index 当前节点索引
   * @returns 左子节点索引
   */
  #left(index: number): number {
    return (index << 1) + 1;
  }

  /**
   * 获取当前节点的右子节点索引
   * @param index 当前节点索引
   * @returns 右子节点索引
   */
  #right(index: number): number {
    return (index << 1) + 2;
  }

  /**
   * 获取当前节点的父节点索引
   * @param index 当前节点的索引
   * @returns 父节点索引
   */
  #parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  /** 打印当前的堆 */
  get print() {
    console.log(this.#maxHeap);
    return this.#maxHeap;
  }

  /**
   * 获取节点的数量
   * @returns 节点的数量
   */
  get size(): number {
    return this.#maxHeap.length;
  }

  /**
   * 判断当前堆是否为空
   * @returns 布尔值
   */
  get isEmpty(): boolean {
    return !this.#maxHeap.length;
  }

  /**
   * 获取堆顶元素
   * @returns 堆顶元素
   */
  get peek(): number {
    return this.#maxHeap[0];
  }

  /**
   * 交换数组中两个元素的位置
   * @param i 数组元素索引
   * @param j 数组元素索引
   */
  #swap(i: number, j: number): void {
    [this.#maxHeap[i], this.#maxHeap[j]] = [this.#maxHeap[j], this.#maxHeap[i]];
  }

  /**
   * 以当前节点为起点进行上滤操作
   * @param index 当前节点的索引
   */
  #siftUp(index: number) {
    while (true) {
      const parent = this.#parent(index);
      if (parent < 0 || this.#maxHeap[index] <= this.#maxHeap[parent]) break;
      this.#swap(index, parent);
      index = parent;
    }
  }

  /**
   * 以当前节点为起点进行下滤操作
   * @param index 当前节点的索引
   */
  #siftDown(index: number) {
    while (true) {
      let l = this.#left(index),
        r = this.#right(index);
      let max = index; // 最大值的索引
      if (l < this.size && this.#maxHeap[l] > this.#maxHeap[max]) max = l;
      if (r < this.size && this.#maxHeap[r] > this.#maxHeap[max]) max = r;
      if (max === index) break;
      this.#swap(index, max);
      index = max;
    }
  }

  /**
   * 插入元素操作
   * 1. 将元素放入堆的末尾
   * 2. 上滤元素，以维护最大堆的性质
   * 3. 重复步骤2，直到元素到达其正确的位置
   * @param value
   */
  push(value: number): void {
    this.#maxHeap.push(value);
    this.#siftUp(this.size - 1);
  }

  /**
   * 取出堆顶元素操作
   * 1. 将堆顶元素和堆底的元素互换
   * 2. 删除堆底的元素
   * 3. 下滤元素，以维护最大堆的性质
   * 4. 重复步骤2，直到元素到达其正确的位置
   *
   */
  pop(): number {
    if (this.isEmpty) throw new RangeError("Heap is empty");
    this.#swap(0, this.size - 1);
    const value = this.#maxHeap.pop();
    this.#siftDown(0);
    return value;
  }
}

const arr = [9, 8, 10, 30, 2, 7, 4, 13, 1, 5, 21, 3];
const maxHeap = new MaxHeap(arr);
maxHeap.pop();
maxHeap.push(18);
maxHeap.print;

export {};
