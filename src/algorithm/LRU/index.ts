// LRU - Least Recently Used 最近最少使用
// 是一种内存淘汰策略
//用途：在内存不足的时候，淘汰最近最少使用的数据，常用于缓存系统的淘汰策略
class Node {
  key;
  value;
  prev;
  next;
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.dummy = new Node();
  this.dummy.next = this.dummy;
  this.dummy.prev = this.dummy;
  this.keyToNode = new Map();
};
LRUCache.prototype.getNode = function (key) {
  if (!this.keyToNode.has(key)) {
    return null;
  }

  const node = this.keyToNode.get(key);
  this.remove(node);
  this.pushFront(node);
  return node;
};
LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};
LRUCache.prototype.pushFront = function (node) {
  node.prev = this.dummy;
  node.next = this.dummy.next;
  node.next.prev = node;
  this.dummy.next = node;
};
LRUCache.prototype.get = function (key) {};
LRUCache.prototype.put = function (key, value) {
  let node = this.getNode(key);
  if (node) {
    node.value = value;
    return;
  }
  node = new Node(key, value);
  this.keyToNode.set(key, node);
  this.pushFront(node);
  if (this.keyToNode.size > this.capacity) {
    const end = this.dummy.prev;
    this.keyToNode.remove(end.key);
    this.remove(end);
  }
};
export {};
