class MaxHeap {
  #heap = [];

  constructor(arr) {
    this.#heap = [...arr];
  }

  /** 打印最小堆 */
  print() {
    console.log("heap is ", this.#heap);
  }

  /** 获取节点的左子节点 */
  #leftChild(index) {
    return (index << 1) + 1;
  }

  /** 获取节点的右子节点 */
  #rightChild(index) {
    return (index << 1) + 2;
  }

  /** 获取父节点 */
  #parent(index) {
    return (index - 1) >> 1;
  }

  get #size() {
    return this.#heap.length;
  }

  /** 交换数组中的两个值 */
  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
  }

  /** 上滤操作，将尾部新添加的元素堆化 */
  #siftUp(index) {
    let parentIndex = this.#parent(index);
    while (index > 0 && this.#heap[index] > this.#heap[parentIndex]) {
      this.#swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.#parent(index);
    }
  }

  /** 向数组的尾部添加一个元素 */
  push(value) {
    this.#heap.push(value);
    this.#siftUp(this.#size - 1);
  }

  /** 执行下滤操作，重新堆化 */
  #siftDown(index) {
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
    this.#heap.unshift(this.#heap.pop());
    this.#siftDown(0);
    return res;
  }
}

const maxHeap = new MaxHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
// maxHeap.push(11);
console.log("[ maxHeap.pop() ] >", maxHeap.pop());
maxHeap.print();

export { MaxHeap };

// Having a rich vocabulary is essential for any aspiring English literature writer as it illustrates their crucial
// ambition to captivate readers and convey emotions, while avoiding annoying comments.
// 丰富的的词汇对于任何有抱负的英语文学作家来说是必不可少的，因为它展现了他们吸引读者和传达情感的至
// 关重要的雄心壮志，同时避免令人烦恼的评论。
// essential adj. 基本的；必要的；本质的；-ess- tobe 存在
// aspiring adj. 有抱负的；渴望的； -spir- breath 呼吸
// literature n. 文学；文学作品； -liter- letter 字母
// crucial adj. 重要的；必要的； -cruc- -crux- cross 十字
// ambition n. 雄心；抱负； amb ambi both 两个 两边 it 走
// captivate v. 吸引；使感到兴奋；
// convey v. 传达；传达信息； -vey- -vi- -via- way 路
// emotion n. 情感；情绪； e 外 -mot- -mov- -mob- move 动
// annoy v. 使烦恼；使烦恼；-noy- -noi- 憎恨
