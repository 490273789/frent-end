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
class Stack {
  private head: INode<number> | null = null;
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
    if (this.head !== null) node.next = this.head;
    this.head = node;
    this._size++;
  }

  // 出队操作
  poll() {
    const result = this.head;
    if (this.head !== null) {
      this.head = this.head.next;
      this._size--;
    }
    return result;
  }
}

const stack = new Stack();
console.log("[ stack ] >", stack);
stack.offer(0);
stack.offer(1);
stack.offer(2);
stack.print();
stack.poll();
stack.poll();
stack.print();
export default {};
