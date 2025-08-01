class MinHeap {
  #heap: number[];

  constructor(initialValues?: number[]) {
    if (initialValues) {
      this.#heap = [...initialValues];
      this.#buildHeap();
    }
  }
  #heapifyDown(index: number) {}

  #buildHeap(): void {
    const start = Math.floor((this.#heap.length - 2) / 2);
    for (let i = start; i >= 0; i--) {
      this.#heapifyDown(i);
    }
  }
}

export default MinHeap;
