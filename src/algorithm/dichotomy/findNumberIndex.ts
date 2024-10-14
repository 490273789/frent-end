// 有序数组中找到 >= num 最左的位置
// num = 2, 最左位置的index = 1
// num = 3, 最左位置的index = 4
// num = 5, 最左位置的index = 6
// num = 7, 最左位置的index = 11
const arr = [1, 2, 2, 2, 3, 3, 5, 5, 5, 6, 6, 7, 8];

const findNumLeftIndex = (target: number[] = [], num: number) => {
  const length = target.length;
  if (length === 0) return -1;
  const arr = [...target];
  let resultIndex = -1;
  let left = 0,
    right = length - 1,
    middle = 0;
  while (left <= right) {
    middle = ((left + right) / 2) | 0;
    if (arr[middle] >= num) {
      resultIndex = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return resultIndex;
};
console.log("[ findNumLeftIndex(arr, 7) ] >", findNumLeftIndex(arr, 7));
// >= 2的最左位置就是index = 1的位置

// 有序数组中找到 <= num 最右的位置
const findNumRightIndex = (target: number[], num: number) => {
  const length = target.length;
  if (length === 0) return -1;
  const arr = [...target];
  let t = -1,
    left = 0,
    right = length - 1,
    middle = 0;
  while (left <= right) {
    middle = ((left + right) / 2) | 0;

    if (arr[middle] <= num) {
      t = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    console.log("[ middle,arr[middle],left,right ] >", middle, arr[middle], left, right);
  }

  return t;
};
console.log("[ findNumRight ] >", findNumRightIndex([5, 5, 5, 5], 5));
