// Bubble Sort

// 用第一位与第二位比较，如果第一位比第二位大，则交换位置
// 第二位与第三位比较，如果第二位比第三位大，则交换位置，以此类推比较第n 为 与n - 1位
// 第一遍比较完后可以确定第n位已经是最大，下一次可以不用比较
// 时间复杂度： O(n²)
const bubbleSort = (target: number[]) => {
  const arr = [...target];
  if (target.length < 2) return arr;
  const n = arr.length;
  for (let end = n - 1; end >= 0; end--) {
    console.log("[ end ] >", end);
    let lock = true;
    for (let second = 1; second <= end; second++) {
      if (arr[second - 1] > arr[second]) {
        lock = false;
        [arr[second - 1], arr[second]] = [arr[second], arr[second - 1]];
      }
    }
    if (lock) break;
  }
  return arr;
};

const testArr = [9, 3, 2, 4, 6, 7, 1];
console.log("[ bubbleSort(testArr) ] >", bubbleSort(testArr));

export default {};
