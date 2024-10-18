// 两个有序链表合并
// 给定两个有序链表的头节点，返回合并之后的大链表，要求依然有序
// 1 -> 3 -> 3 -> 5 -> 7
// 2 -> 2 -> 3 -> 3 -> 7
// 返回 1 -> 2 -> 2-> 3 -> 3 -> 3 -> 3 -> 5 -> 7
import { generateLinkedList, Node, createNode } from "./utils";

const linkedList1 = generateLinkedList(5);
const linkedList2 = generateLinkedList(3);

const mergeLinkedList = (head1: Node<number> | null, head2: Node<number> | null) => {
  if (head1 === null || head2 === null) {
    return head1 === null ? head2 : head1;
  }

  let head: Node<number> | null = head1.value < head2.value ? head1 : head2;
  let cur1 = head.next;
  let cur2: Node<number> | null = head === head1 ? head2 : head1;

  let pre = head;
  while (cur1 !== null && cur2 !== null) {
    if (cur1.value <= cur2.value) {
      pre.next = cur1;
      cur1 = cur1.next;
    } else {
      pre.next = cur2;
      cur2 = cur2.next;
    }
    pre = pre.next;
  }
  pre.next = cur1 === null ? cur2 : cur1;

  return head as Node<number> | null;
};

let result = mergeLinkedList(linkedList1, linkedList2);
console.log("[ result ] >", result);

while (result !== null) {
  console.log(result.value);
  result = result.next;
}
export default {};
