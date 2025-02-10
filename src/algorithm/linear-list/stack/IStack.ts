import { INode } from "../type";

export interface IStack<T> {
  head?: INode<T> | null;
  push(element: T): void;
  pop(): T | null;
  peek(): T | null;
  isEmpty(): boolean;
  // size(): number;
}
