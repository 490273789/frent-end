class MaxHeap2<T> {
  #heap = [];

  constructor(arr: T[]) {
    this.#heap = [...arr];
    // 建堆
    for (let i = this.#parent(this.size - 1); i >= 0; i--) {
      this.#siftDown(i);
    }
  }
  get print() {
    console.log(this.#heap);
    return this.#heap;
  }

  #left(index: number) {
    return (index << 1) + 1;
  }

  #right(index: number) {
    return (index << 1) + 2;
  }

  #parent(index: number) {
    return Math.floor((index - 1) >> 1);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
  }

  #siftUp(index: number) {
    while (true) {
      let pI = this.#parent(index);
      if (pI < 0 || this.#heap[index] <= this.#heap[pI]) break;
      this.#swap(index, pI);
      index = pI;
    }
  }

  #siftDown(index: number) {
    while (true) {
      let l = this.#left(index),
        r = this.#right(index),
        max = index;
      if (l < this.size && this.#heap[l] > this.#heap[max]) max = l;
      if (r < this.size && this.#heap[r] > this.#heap[max]) max = r;
      if (max === index) break;
      this.#swap(max, index);
      index = max;
    }
  }

  get size() {
    return this.#heap.length;
  }

  pop() {
    this.#swap(0, this.size - 1);
    const res = this.#heap.pop();
    this.#siftDown(0);
    return res;
  }

  push(item) {
    this.#heap.push(item);
    this.#siftUp(this.size - 1);
  }
}

const arr = [9, 8, 10, 30, 2, 7, 4, 13, 1, 5, 21, 3];
const maxHeap2 = new MaxHeap2(arr);
maxHeap2.pop();
maxHeap2.push(18);
maxHeap2.print;

export {};
