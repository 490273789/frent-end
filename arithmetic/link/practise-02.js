// 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
// 输入: 1->1->2
// 输出: 1->2
// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3

const l1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }
}

const deduplicationLink = (link) => {
  const res = link;
  let i = 0
  while(link && link.next) {
    if(link.value === link.next.value) link.next = link.next.next
    link = link.next
  }
  return res
}

const result = deduplicationLink(l1);
console.log(result);

