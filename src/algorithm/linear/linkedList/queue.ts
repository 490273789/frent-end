interface INode<T> {
  value: T;
  next: INode<T> | null;
}
class Node<T> implements INode<T> {
  value: T;
  next: INode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  private head: INode<number> | null = null;
  private tail: INode<number> | null = null;
  _size: number = 0;

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
  offer(value: number) {
    const node = new Node(value);
    if (this.head === null || this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this._size++;
  }

  // 出队操作
  poll() {
    const result = this.head;
    if (this.head === null) {
      return result;
    } else if (this.head === this.tail) {
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
queue.offer(0);
queue.offer(1);
queue.offer(2);
queue.print();
queue.poll();
queue.poll();
queue.print();
export default {};
