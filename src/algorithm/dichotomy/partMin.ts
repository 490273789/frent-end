// 二分不一定需要数组有序

// 局部最小问题 ，数组无序，相邻位置不相等
// [0] < [1] 0是局部最小
// [n - 2] > [n - 1] n-1 是局部最小
// [i - 1] > [i] < [i + 1] i 是局部最小
const arr3 = [3, 2, 3, 2, 3];

const partMid = (target: number[]) => {
  const length = target.length;
  if (length === 0) return -1;
  if (length === 1) return 0;
  // 处理两头的局部最小
  if (target[0] < target[1]) return 0;
  if (target[length - 1] < target[length - 2]) return length;
  // 除开两头的局部最小就是三个数，中间的是最小的
  let l = 0,
    r = length - 1;
  while (l < r - 1) {
    const middle = ((l + 3) / 2) | 0; // +3?
    if (target[middle] < target[middle - 1] && target[middle] < target[middle + 1]) return middle;
    if (target[middle] > target[middle - 1]) r = middle - 1;
    else if (target[middle] > target[middle + 1]) l = middle + 1;
  }
  return target[l] < target[r] ? l : r;
};
console.log("[ partMid ] >", partMid(arr3));
export default {};
