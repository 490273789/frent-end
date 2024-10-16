import { generateLinkedList } from "./utils";
import type { Node } from "./utils";

const linkedList = generateLinkedList(10);
console.log(linkedList);
// 反转链表
const reverseLinkedList = (head: Node<number>): Node<number> | null => {
  let current: Node<number> | null = head;
  let preNode = null;
  let nextNode = null;

  while (current !== null) {
    nextNode = current.next;
    current.next = preNode;
    preNode = current;
    current = nextNode;
  }

  return preNode;
};

const newHead = reverseLinkedList(linkedList);
console.log(newHead);
export default {};
