/**
 * 大顶堆数据结构
 * 特点：父节点的值总是大于或等于其子节点的值
 */
class MaxHeap {
  #heap: number[] = [];

  constructor(initialValues?: number[]) {
    if (initialValues) {
      this.#heap = [...initialValues];
      this.#buildHeap();
    }
  }

  /**
   * 获取堆的大小
   */
  get size(): number {
    return this.#heap.length;
  }

  /**
   * 判断堆是否为空
   */
  get isEmpty(): boolean {
    return this.#heap.length === 0;
  }

  /**
   * 获取堆顶元素（最大值）
   */
  get peek(): number | null {
    return this.#heap.length > 0 ? this.#heap[0] : null;
  }

  /**
   * 获取父节点索引
   */
  #getParentIndex(index: number): number {
    return (index - 1) >> 1;
  }

  /**
   * 获取左子节点索引
   */
  #getLeftChildIndex(index: number): number {
    return (index << 1) + 1;
  }

  /**
   * 获取右子节点索引
   */
  #getRightChildIndex(index: number): number {
    return (index << 1) + 2;
  }

  /**
   * 向上调整堆（用于插入操作）
   */
  #heapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.#getParentIndex(index);

      // 如果当前节点小于等于父节点，则堆已经满足性质
      if (this.#heap[index] <= this.#heap[parentIndex]) {
        break;
      }

      // 交换当前节点与父节点
      this.#swap(index, parentIndex);
      index = parentIndex;
    }
  }

  /**
   * 向下调整堆（用于删除操作）
   */
  #heapifyDown(index: number): void {
    while (this.#getLeftChildIndex(index) < this.#heap.length) {
      let largerChildIndex = this.#getLeftChildIndex(index);
      const rightChildIndex = this.#getRightChildIndex(index);

      // 找到左右子节点中较大的一个
      if (
        rightChildIndex < this.#heap.length &&
        this.#heap[rightChildIndex] > this.#heap[largerChildIndex]
      ) {
        largerChildIndex = rightChildIndex;
      }

      // 如果当前节点大于等于较大的子节点，则堆已经满足性质
      if (this.#heap[index] >= this.#heap[largerChildIndex]) {
        break;
      }

      // 交换当前节点与较大的子节点
      this.#swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  /**
   * 交换两个元素
   */
  #swap(i: number, j: number): void {
    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
  }

  /**
   * 插入元素
   */
  insert(value: number): void {
    this.#heap.push(value);
    this.#heapifyUp(this.#heap.length - 1);
  }

  /**
   * 删除并返回最大值（堆顶元素）
   */
  extractMax(): number | null {
    if (this.#heap.length === 0) {
      return null;
    }

    if (this.#heap.length === 1) {
      return this.#heap.pop()!;
    }

    const max = this.#heap[0];
    // 将最后一个元素移到堆顶
    this.#heap[0] = this.#heap.pop()!;
    // 向下调整堆
    this.#heapifyDown(0);

    return max;
  }

  /**
   * 删除指定索引的元素
   */
  remove(index: number): number | null {
    if (index < 0 || index >= this.#heap.length) {
      return null;
    }

    const value = this.#heap[index];

    if (index === this.#heap.length - 1) {
      // 删除最后一个元素
      this.#heap.pop();
    } else {
      // 用最后一个元素替换要删除的元素
      this.#heap[index] = this.#heap.pop()!;

      // 根据情况选择向上或向下调整
      const parentIndex = this.#getParentIndex(index);
      if (index > 0 && this.#heap[index] > this.#heap[parentIndex]) {
        this.#heapifyUp(index);
      } else {
        this.#heapifyDown(index);
      }
    }

    return value;
  }

  /**
   * 从数组构建堆
   */
  #buildHeap(): void {
    // 从最后一个非叶子节点开始，向上进行堆化
    for (let i = Math.floor(this.#heap.length / 2) - 1; i >= 0; i--) {
      this.#heapifyDown(i);
    }
  }

  /**
   * 获取堆的数组表示
   */
  toArray(): number[] {
    return [...this.#heap];
  }

  /**
   * 清空堆
   */
  clear(): void {
    this.#heap = [];
  }

  /**
   * 打印堆的层次遍历结果
   */
  printHeap(): void {
    if (this.#heap.length === 0) {
      console.log("堆为空");
      return;
    }

    console.log("堆的层次遍历：");
    let level = 0;
    let currentLevelNodes = 1;
    let nextLevelNodes = 0;
    let index = 0;

    while (index < this.#heap.length) {
      let levelStr = `第 ${level} 层: `;

      for (let i = 0; i < currentLevelNodes && index < this.#heap.length; i++) {
        levelStr += this.#heap[index] + " ";
        index++;

        // 计算下一层的节点数
        if (this.#getLeftChildIndex(index - 1) < this.#heap.length) {
          nextLevelNodes++;
        }
        if (this.#getRightChildIndex(index - 1) < this.#heap.length) {
          nextLevelNodes++;
        }
      }

      console.log(levelStr);
      level++;
      currentLevelNodes = nextLevelNodes;
      nextLevelNodes = 0;
    }
  }
}

// 使用示例和测试
if (import.meta.url === `file://${process.argv[1]}`) {
  // 创建大顶堆
  const maxHeap = new MaxHeap();

  console.log("=== 大顶堆测试 ===");

  // 测试插入操作
  console.log("\n插入元素: 10, 20, 15, 30, 40");
  [10, 20, 15, 30, 40].forEach((num) => {
    maxHeap.insert(num);
    console.log(`插入 ${num} 后，堆顶元素: ${maxHeap.peek}`);
  });

  console.log(`\n当前堆大小: ${maxHeap.size}`);
  console.log(`堆的数组表示: [${maxHeap.toArray().join(", ")}]`);
  maxHeap.printHeap();

  // 测试提取最大值
  console.log("\n提取最大值:");
  while (!maxHeap.isEmpty) {
    const max = maxHeap.extractMax();
    console.log(`提取的最大值: ${max}, 剩余元素: [${maxHeap.toArray().join(", ")}]`);
  }

  // 测试从数组构建堆
  console.log("\n从数组 [3, 1, 4, 1, 5, 9, 2, 6] 构建大顶堆:");
  const heap2 = new MaxHeap([3, 1, 4, 1, 5, 9, 2, 6]);
  console.log(`堆的数组表示: [${heap2.toArray().join(", ")}]`);
  heap2.printHeap();
}

export default MaxHeap;
