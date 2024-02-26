import { IStack } from "./IStack";
/** 基于数组实现 */
class ArrayStack<T> implements IStack<T> {
  private data: T[] = [];

  /**
   * 向栈中添加一个元素
   * @param element 入栈的元素
   */
  push(element: T) {
    this.data.push(element);
  }

  /** 移除栈顶元素，并返回被移除的元素 */
  pop() {
    return this.data.pop();
  }

  /** 返回栈顶元素，不对栈做任何修改 */
  peek() {
    return this.data[this.data.length - 1];
  }

  /** 查询栈内是否有元素，有返回true，没有返回false */
  isEmpty() {
    return !this.data.length;
  }

  /**
   * 查询栈中元素的数量，返回元素的个数
   */
  size() {
    return this.data.length;
  }
}

const arrayStack = new ArrayStack<number>();
arrayStack.push(1);
arrayStack.push(2);
arrayStack.push(3);
console.log("peek:", arrayStack.peek());
console.log("pop:", arrayStack.pop());
console.log("isEmpty:", arrayStack.isEmpty());
console.log("size:", arrayStack.size());
