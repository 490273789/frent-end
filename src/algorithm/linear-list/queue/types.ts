import { IList } from "../type";

export interface IQueue<T> extends IList<T> {
  /** 入队操作 */
  enqueue(element: T): void;
  /** 出队操作 */
  dequeue(): T | null;
}
