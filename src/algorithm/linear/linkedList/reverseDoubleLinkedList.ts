import { generateDoubleLinkedList } from "./utils";
import type { Node } from "./utils";
const doubleLinkedList = generateDoubleLinkedList(3);
console.log("[ doubleLinkedList ] >", doubleLinkedList.next?.next?.last);

const reverseDoubleLinkedList = (head: Node<number>) => {
  let current = head;
  let preNode = null;
  while (current !== null) {
    current.last = current.next;
    current.next = preNode;
    preNode = current;
    current = current.last!;
  }
  return preNode;
};

const newHead = reverseDoubleLinkedList(doubleLinkedList);
console.log("[ newHead ] >", newHead);
let current: Node<number> | null = newHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
export default {};
