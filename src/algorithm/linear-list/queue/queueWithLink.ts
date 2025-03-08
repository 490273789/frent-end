import { INode } from "../type";
import Node from "../Node";

class Queue {
  private head: INode<number> | null = null;
  private tail: INode<number> | null = null;
  private _size: number = 0;

  isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  print() {
    console.log(this.head);
  }

  // 入队操作
  enqueue(value: number) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this._size++;
  }

  // 出队操作
  dequeue() {
    const result = this.head;
    if (this.head === null) return result;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this._size--;

    return result;
  }
}

const queue = new Queue();
console.log("[ queue ] >", queue);
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
export default {};
