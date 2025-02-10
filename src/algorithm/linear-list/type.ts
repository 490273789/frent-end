export interface IList<T> {
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

export interface INode<T> {
  value: T;
  next: INode<T> | null;
}
