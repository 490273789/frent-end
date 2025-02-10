// 给定链表 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8
// 给定参数 3，三个为一组，不够三个忽略，组内逆序
// 输出 3 - 2 - 1 - 6 - 5 - 4 - 7 - 8

import { generateLinkedList, Node } from "../utils";

const linkedList = generateLinkedList(7);

const getGroupEnd = (start: Node<number> | null, n: number) => {
  while (n-- && n > 0 && start !== null) {
    start = start.next;
  }
  return start;
};
const reverse = (start: Node<number> | null, end: Node<number> | null) => {
  end = end!.next;
  let pre = null;
  let current = start;
  let next = null;
  while (current !== end) {
    next = current!.next;
    current!.next = pre;
    pre = current;
    current = next;
  }
  start!.next = end;
};

const reverseGroup = (count: number, head: Node<number> | null) => {
  // 反转前的最后一个节点
  let start = head;
  // 反转前的最后一个节点
  let end = getGroupEnd(start, count);
  if (end === null) {
    return head;
  }
  head = end;
  reverse(start, end);
  // 记录反转后的最后一个节点
  let lastEnd = start;

  while (lastEnd !== null) {
    start = lastEnd.next;
    let end = getGroupEnd(start, count);
    if (end === null) {
      return head;
    }
    reverse(start, end);
    lastEnd.next = end;
    lastEnd = start;
  }

  return head;
};

let result = reverseGroup(3, linkedList);

console.log("[ result ] >", result);

while (result !== null) {
  console.log(result.value);
  result = result.next;
}
export default {};
