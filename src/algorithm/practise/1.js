// n 的阶乘相加
const ans = (n) => {
  let res = 0;
  let cur = 1;
  for (let i = 1; i <= n; i++) {
    cur = cur * 1;
    res += cur;
  }

  return cur;
};

// 选择排序
// 解题步骤
// 1.下标 0~n-1上选出最小值放到0的位置上
// 2.下标1~n-1上选出最小值放到1的位置上
// 3.下标 2~n-1上选出最小值放到2的位置上
// 。。。
/**
 * 交换数组两个下标的值
 * @param {*} target 目标数组
 * @param {*} i 数组索引
 * @param {*} j 数组索引
 */
const swapArrayItem = (target, i, j) => {
  [target[i], target[j]] = [target[j], target[i]];
};
const selectSort = (target) => {
  const arr = [...target];
  if (target === undefined || target.length < 2) arr;
  const length = arr.length;
  // 求 i 位置上的最小值需要运行i 遍
  for (let i = 0; i < length; i++) {
    let minIndex = i;
    // 找最小值
    for (let j = i + 1; j < length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    swapArrayItem(arr, i, minIndex);
  }
  return arr;
};

const arr1 = [9, 7, 8, 3, 4, 1, 5, 2];
console.log("[ selectSort(arr1) ] >", selectSort(arr1));

// 0 ~ n - 1
// 0 ~ n - 2
const bubbleSort = (target) => {
  const arr = [...target];
  if (arr === undefined || arr.length < 2) return arr;
  const length = arr.length;

  for (let end = length - 1; end >= 0; end--) {
    let lock = true;
    for (let second = 1; second <= end; second++) {
      if (arr[second - 1] < arr[second]) continue;
      lock = false;
      swapArrayItem(arr, second - 1, second);
    }
    if (lock) return arr;
  }

  return arr;
};
console.log("[ bubbleSort(arr1) ] >", bubbleSort(arr1));
