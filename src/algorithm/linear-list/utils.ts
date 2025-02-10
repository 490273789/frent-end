export type Node<T> = {
  value: T;
  next: Node<T> | null;
  last?: Node<T> | null;
};
export const createNode = <T>(value: T): Node<T> => ({
  value,
  next: null,
  last: null,
});

export const generateLinkedList = (length: number) => {
  let head = createNode(0);
  let current = head;
  for (let i = 1; i < length; i++) {
    current.next = createNode(i);
    current = current.next;
  }
  return head;
};

export const generateDoubleLinkedList = (length: number) => {
  let head = createNode(0);
  let current = head;
  for (let i = 1; i < length; i++) {
    current.next = createNode(i);
    current.next.last = current;
    current = current.next;
  }
  return head;
};
export {};
