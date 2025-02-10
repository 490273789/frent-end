import { IStack } from "./IStack";
import Node from "../Node";
import { INode } from "../type";
class LinkStack<T> implements IStack<T> {
  head: INode<T> | null = null;
  private _size = 0;

  /** 获取链表长度 */
  get size(): number {
    return this._size;
  }

  /** 入栈 */
  push(element: T): void {
    const node = new Node(element);
    if (this.head !== null) node.next = this.head;
    this.head = node;
    this._size++;
  }

  /** 出栈  */
  pop(): T | null {
    if (this.head === null) return null;
    const node = this.head;
    this.head = this.head.next;
    this._size--;
    return node.value;
  }

  /** 查看栈顶元素 */
  peek(): T | null {
    if (this.head === null) return null;
    return this.head.value;
  }

  /** 查看栈是否为空 */
  isEmpty(): boolean {
    return !!this._size;
  }
}
const linkStack = new LinkStack();
