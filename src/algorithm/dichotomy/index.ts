// 有序数组中找到num
const findNum = (target: number[], number: number) => {
  if (target.length < 2) return;
  let leftIndex = 0,
    rightIndex = target.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = ((rightIndex + leftIndex) / 2) | 0;
    if (target[midIndex] === number) return true;
    else if (number > target[midIndex]) leftIndex = midIndex + 1;
    else rightIndex = midIndex - 1;
  }
  return false;
};
console.log("[ findNum ] >", findNum([1, 2, 3, 4, 5, 6], 6));
console.log("[ findNum ] >", findNum([1, 2, 3, 4, 5, 6], 1));
console.log("[ findNum ] >", findNum([1, 3, 4, 5, 6], 2));
console.log("[ findNum ] >", findNum([2, 3, 4, 5, 6], 1));
console.log("[ findNum ] >", findNum([1, 2, 3, 4, 5], 6));
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
console.log("[ findNumLeft(arr, 7) ] >", findNumLeft(arr, 6));
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

// 二分不一定需要数组有序
// 局部最小问题 ，数组无序，相邻位置不相等
// [0] < [1] 0是局部最小
// [n - 2] > [n - 1] n-1 是局部最小
// [i - 1] > [i] < [i + 1] i 是局部最小
const arr3 = [3, 2, 3, 2, 3];

const partMid = (target) => {
  const length = target.length;
  if (length === 0) return -1;
  if (length === 1) return 0;
  if (target[0] < target[1]) return 0;
  if (target[length - 1] < target[length - 2]) return length;
  let l = 0,
    r = length - 1;
  while (l < r - 1) {
    const middle = ((l + 3) / 2) | 0;
    if (target[middle] < target[middle - 1] && target[middle] < target[middle + 1]) return middle;
    if (target[middle] > target[middle - 1]) r = middle - 1;
    else if (target[middle] > target[middle + 1]) l = middle + 1;
  }
  return target[l] < target[r] ? l : r;
};
console.log("[ partMid ] >", partMid(arr3));
export default {};
