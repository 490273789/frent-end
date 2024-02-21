// 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
// 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
// 链表问题的中心思想：处理链表的本质是处理链表节点之间的指针关系

const mergeAndSortLink = (link1, link2) => {
  const newLink = {
    value: null,
    next: null
  }

  // 一直指向链表的最后一个节点
  let current = newLink

  while(link1 && link2) {
    if(link1.value < link2.value) {
      current.next = link1
      link1 = link1.next
    } else {
      current.next = link2
      link2 = link2.next
    }
    current = current.next
  }
  if(link1) current.next = link1
  if(link2) current.next = link2
  return newLink.next
};

const l1 = {
  // 数据域
  value: 1,
  // 指针域，指向下一个结点的引用
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

const l2 = {
  value: 1,
  next: {
    value: 4,
    next: {
      value: 5,
      next: null,
    },
  },
};

const result = mergeAndSortLink(l1, l2)

const iterateLink = (link) => {
  let current = link
  while(current) {
    console.log(current.value)
    current = current.next
  }
}

iterateLink(result)
