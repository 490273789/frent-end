// 有序数组中找到 >= num 最左的位置
const arr = [1, 2, 2, 2, 3, 3, 5, 5, 5, 6, 6, 7];
// 6
const findNumLeft = (target: number[], num: number) => {
  const length = target.length;
  if (length === 0) return -1;
  const arr = [...target];
  let t = -1;
  let left = 0,
    right = length - 1,
    middle = 0;
  while (left <= right) {
    middle = ((left + right) / 2) | 0;
    if (arr[middle] >= num) {
      t = middle;
      right = middle - 1;
    } else {
      // num < item;
      left = middle + 1;
    }
    console.log("[ middle,item,left,right ] >", middle, arr[middle], left, right);
  }
  return t;
};
console.log("[ findNumLeft(arr, 7) ] >", findNumLeft(arr, 7));
// >= 2的最左位置就是index = 1的位置
// 有序数组中找到 <= num 最右的位置
const findNumRight = (target: number[], num: number) => {
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
console.log("[ findNumRight ] >", findNumRight([5, 5, 5, 5], 5));
