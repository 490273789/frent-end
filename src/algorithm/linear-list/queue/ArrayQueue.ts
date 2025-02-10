import { IQueue } from "./types";
class ArrayQueue<T> implements IQueue<T> {
  queue: T[] = [];
  enqueue(element: T) {
    this.queue.push(element);
  }
  dequeue(): T | undefined {
    return this.queue.shift();
  }
  peek(): T {
    return this.queue[0];
  }
  isEmpty(): boolean {
    return this.queue.length === 0;
  }
  size(): number {
    return this.queue.length;
  }
}

export default ArrayQueue;
