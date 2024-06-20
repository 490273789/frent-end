// Select Sort
// 第 1 位 与 后面的比较找出最小的 索引，与第一位交换，第一位就是最小值
// 第 2 位 与后面的比较找出最小的索引与第2位交换
// 。。。。

// 时间复杂度O(n²)

const selectOrder = (target: number[]) => {
  const arr = [...target];
  if (arr.length < 2) return arr;
  const n = arr.length - 1;
  // 需要比较的次数
  for (let i = 0; i < n; i++) {
    let minIndex = i; // 本次比较最小值的索引
    for (let j = i + 1; j <= n; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    if (minIndex !== i) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};

const testArr = [7, 2, 6, 5, 7, 3, 9, 1];
console.log("[ selectOrder(testArr) ] >", selectOrder(testArr));

export default {};
