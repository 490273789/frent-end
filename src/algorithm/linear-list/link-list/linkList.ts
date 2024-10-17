class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  head!: Node<T> | null;
  private size = 0;

  get length(): number {
    return this.size;
  }

  traversal(): string {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr.join("->"));
    return arr.join("->");
  }
  // 0 -> 1
  getPosition(position: number): Node<T> | null {
    if (position < 0 || position >= this.size) return null;
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current;
  }

  append(node: T) {
    const newNode = new Node(node);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current: Node<T> | null = this.head;
      let preCurrent: Node<T> | null;
      while (current) {
        preCurrent = current;
        current = current.next;
      }
      preCurrent!.next = newNode;
    }
    this.size++;
  }

  appendAt(position: number, value: T): boolean {
    if (position < 0 || position > this.size) return false;
    const newNode = new Node(value);
    if (position === 0) {
      newNode.next = this.head?.next ?? null;
      this.head = newNode;
    } else {
      const preNode = this.getPosition(position - 1);
      newNode.next = preNode!.next;
      preNode!.next = newNode;
    }
    this.size++;
    return true;
  }

  removeAt(position: number): Node<T> | null {
    if (position < 0 || position >= this.size) return null;
    let current: Node<T> | null;
    if (position === 0) {
      current = this.head!.next;
      this.head = this.head?.next?.next ?? null;
    } else {
      const preNode = this.getPosition(position - 1);
      current = preNode!.next;
      preNode!.next = preNode!.next!.next;
    }
    return current;
  }

  /** 更新position位置的值 */
  update(position: number, value: T) {
    const current = this.getPosition(position);
    if (current !== null) {
      current.value = value;
    }
    return current;
  }

  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

const linkList = new LinkedList<string>();
/** -----------测试append----------- */
linkList.append("0");
linkList.append("1");
linkList.appendAt(2, "2");
linkList.appendAt(3, "3");
/** ---------测试traversal--------- */
linkList.traversal();

/** --------测试删除节点---------- */
linkList.removeAt(3);
linkList.traversal();
console.log(linkList.indexOf("2"));

// 1. 设计一个链表
// 2. 237 删除链表中的节点
// 3. 206 反转链表 迭代和递归两种方法
export default {};
