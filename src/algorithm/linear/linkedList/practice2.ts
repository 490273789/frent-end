// 两个链表相加
// 给定两个链表，认为从左到右是某个数字从第到高，返回相加之后的链表
// 例子：4 -> 3 -> 6  + 2 -> 5 -> 3
// 6 -> 8 -> 9
// 634 + 352 = 986

import { generateLinkedList, Node, createNode } from "./utils";

const linkedList1 = generateLinkedList(5);
const linkedList2 = generateLinkedList(3);

const getLinkedListLength = (linkedList: Node<number> | null) => {
  let length = 0;

  while (linkedList !== null) {
    length++;
    linkedList = linkedList.next;
  }

  return length;
};
const addTowLinkedList = (linkedList1: Node<number> | null, linkedList2: Node<number> | null) => {
  const len1 = getLinkedListLength(linkedList1);
  const len2 = getLinkedListLength(linkedList2);
  const long = len1 >= len2 ? linkedList1 : linkedList2;
  let curLong: Node<number> | null = long;
  let curShort: Node<number> | null = long === linkedList1 ? linkedList2 : linkedList1;

  let last = null;

  let carry = 0;
  let curNum = 0;

  while (curShort !== null) {
    curNum = curLong!.value + curShort.value + carry;
    curLong!.value = curNum % 10;
    carry = (curNum / 10) | 0;
    last = curLong;
    curLong = curLong!.next;
    curShort = curShort.next;
  }
  while (curLong !== null) {
    curNum = curLong!.value + carry;
    curLong!.value = curNum % 10;
    carry = (curNum / 10) | 0;
    last = curLong;
    curLong = curLong!.next;
  }
  if (carry !== 0) {
    last!.next = createNode(1);
  }
  return long;
};

let result = addTowLinkedList(linkedList1, linkedList2);
console.log("[ result ] >", result);

while (result !== null) {
  console.log(result.value);
  result = result.next;
}
export default {};
