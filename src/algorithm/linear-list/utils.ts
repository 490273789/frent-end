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

// 实现冒泡排序
export const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// 实现快速排序

export {};
