# 大顶堆（Max Heap）算法实现

## 概述

这是一个完整的大顶堆数据结构实现，使用TypeScript编写。大顶堆是一种特殊的完全二叉树，其中每个父节点的值都大于或等于其子节点的值。

## 文件结构

- `max-heap.ts` - 大顶堆的完整实现
- `heap-example.ts` - 使用示例和测试用例
- `heap.md` - 堆的理论知识和说明

## 主要特性

### 时间复杂度
- **查找最大值**: O(1) - 直接返回根节点
- **插入元素**: O(log n) - 需要进行上滤操作
- **删除最大值**: O(log n) - 需要进行下滤操作
- **构建堆**: O(n) - 从数组构建堆

### 空间复杂度
- O(1) - 只需要常数级别的额外空间

## 核心方法

### 基本操作
- `insert(value: number)` - 插入元素
- `extractMax()` - 删除并返回最大值
- `peek()` - 查看堆顶元素（不删除）
- `size()` - 获取堆的大小
- `isEmpty()` - 判断堆是否为空

### 辅助方法
- `remove(index: number)` - 删除指定索引的元素
- `toArray()` - 获取堆的数组表示
- `clear()` - 清空堆
- `printHeap()` - 打印堆的层次遍历结果

## 使用示例

### 基本使用
```typescript
import MaxHeap from './max-heap';

// 创建大顶堆
const heap = new MaxHeap();

// 插入元素
heap.insert(10);
heap.insert(20);
heap.insert(15);

// 查看最大值
console.log(heap.peek()); // 20

// 删除最大值
console.log(heap.extractMax()); // 20
console.log(heap.peek()); // 15
```

### 从数组构建堆
```typescript
const data = [3, 1, 4, 1, 5, 9, 2, 6];
const heap = new MaxHeap(data);
console.log(heap.toArray()); // [9, 6, 4, 1, 5, 3, 2, 1]
```

### 堆排序
```typescript
function heapSort(arr: number[]): number[] {
    const heap = new MaxHeap(arr);
    const result = [];
    while (!heap.isEmpty()) {
        result.push(heap.extractMax()!);
    }
    return result.reverse(); // 升序排列
}
```

### 求前K个最大值
```typescript
function findTopK(arr: number[], k: number): number[] {
    const heap = new MaxHeap(arr);
    const result = [];
    for (let i = 0; i < k && !heap.isEmpty(); i++) {
        result.push(heap.extractMax()!);
    }
    return result;
}
```

## 应用场景

1. **优先队列** - 需要按优先级处理任务的场景
2. **堆排序** - 高效的排序算法
3. **求前K个最大值** - 在大数据集中快速找到前K个最大元素
4. **实时数据流处理** - 维护动态数据流中的最大值
5. **任务调度** - 根据优先级调度任务
6. **图算法** - 如Dijkstra算法中的最短路径问题

## 运行测试

```bash
# 编译TypeScript文件
npx tsc max-heap.ts --target es2022 --module es2022

# 运行测试
node max-heap.js

# 编译并运行示例
npx tsc heap-example.ts --target es2022 --module es2022
node heap-example.js
```

## 实现细节

### 数组表示
堆使用数组来存储，对于索引i的节点：
- 左子节点索引：`2*i + 1`
- 右子节点索引：`2*i + 2`
- 父节点索引：`Math.floor((i-1)/2)`

### 堆化过程
- **上滤（Heapify Up）**: 用于插入操作，将新元素向上移动直到满足堆性质
- **下滤（Heapify Down）**: 用于删除操作，将元素向下移动直到满足堆性质

### 构建堆
从最后一个非叶子节点开始，逐个进行下滤操作，时间复杂度为O(n)。

## 性能对比

| 操作 | 大顶堆 | 无序数组 | 有序数组 |
|------|--------|----------|----------|
| 查找最大值 | O(1) | O(n) | O(1) |
| 插入 | O(log n) | O(1) | O(n) |
| 删除最大值 | O(log n) | O(n) | O(1) |
| 构建 | O(n) | O(1) | O(n log n) |

## 总结

大顶堆是一种高效的数据结构，特别适合需要频繁获取最大值的场景。通过合理的实现，可以在O(log n)的时间复杂度内完成插入和删除操作，在O(1)的时间复杂度内获取最大值。这使得它在许多算法和应用中都有着重要的作用。
