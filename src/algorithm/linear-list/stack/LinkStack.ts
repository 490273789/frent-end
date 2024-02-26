import { IStack } from "./IStack";
class LinkStack<T> implements IStack<T> {
  push(element: T): void {
    throw new Error("Method not implemented.");
  }
  pop(): T {
    throw new Error("Method not implemented.");
  }
  peek(): T {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
}
const linkStack = new LinkStack();
