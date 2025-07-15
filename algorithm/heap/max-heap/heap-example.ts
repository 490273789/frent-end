import MaxHeap from "./max-heap.js";

/**
 * 大顶堆使用示例
 */
console.log("=== 大顶堆使用示例 ===\n");

// 示例1: 基本操作
console.log("示例1: 基本操作");
const heap1 = new MaxHeap();

// 插入数据
console.log("插入数据: 50, 30, 70, 20, 60, 80");
[50, 30, 70, 20, 60, 80].forEach((num) => heap1.insert(num));
console.log(`堆顶元素: ${heap1.peek}`);
console.log(`堆大小: ${heap1.size}`);
console.log(`堆的数组表示: [${heap1.toArray().join(", ")}]`);
heap1.printHeap();

// 示例2: 提取最大值
console.log("\n示例2: 提取最大值");
console.log(`提取最大值: ${heap1.extractMax()}`);
console.log(`提取后堆顶: ${heap1.peek}`);
console.log(`当前堆: [${heap1.toArray().join(", ")}]`);

// 示例3: 从数组构建堆
console.log("\n示例3: 从数组构建堆");
const data = [64, 34, 25, 12, 22, 11, 90];
const heap2 = new MaxHeap(data);
console.log(`原始数组: [${data.join(", ")}]`);
console.log(`构建的堆: [${heap2.toArray().join(", ")}]`);
heap2.printHeap();

// 示例4: 堆排序
console.log("\n示例4: 使用堆进行排序");
const unsorted = [4, 10, 3, 5, 1, 8, 7, 2, 9, 6];
console.log(`待排序数组: [${unsorted.join(", ")}]`);

// 创建堆
const sortHeap = new MaxHeap(unsorted);
console.log(`构建的堆: [${sortHeap.toArray().join(", ")}]`);

// 提取所有元素得到降序排列
const sorted: number[] = [];
while (!sortHeap.isEmpty) {
  sorted.push(sortHeap.extractMax()!);
}
console.log(`降序排列: [${sorted.join(", ")}]`);
console.log(`升序排列: [${sorted.reverse().join(", ")}]`);

// 示例5: 求前K个最大值
console.log("\n示例5: 求前K个最大值");
function findTopK(arr: number[], k: number): number[] {
  const heap = new MaxHeap(arr);
  const result: number[] = [];

  for (let i = 0; i < k && !heap.isEmpty; i++) {
    result.push(heap.extractMax()!);
  }

  return result;
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(`数组: [${numbers.join(", ")}]`);
console.log(`前3个最大值: [${findTopK(numbers, 3).join(", ")}]`);
console.log(`前5个最大值: [${findTopK(numbers, 5).join(", ")}]`);
