// 二分不一定需要数组有序

// 局部最小问题 ，数组无序，相邻位置不相等
// 1、 [0] < [1] 0是局部最小
// 2、 [n - 2] > [n - 1] n-1 是局部最小
// 3、 [i - 1] > [i] < [i + 1] i 是局部最小
const arr3 = [3, 1, 2, 3, 2, 3, 4];

const partMinValueIndex = (target: number[]) => {
  const length = target.length;
  if (length === 0) return -1;
  if (length === 1) return 0;
  // 处理两头的局部最小
  if (target[0] < target[1]) return 0;
  if (target[length - 1] < target[length - 2]) return length;
  // 除开两头的局部最小就是三个数，中间的是最小的
  let l = 0,
    r = length - 1,
    result = -1;
  while (l < r - 1) {
    const middle = (l + r) >> 1;
    if (target[middle] < target[middle - 1] && target[middle] < target[middle + 1]) return middle;
    else if (target[middle] > target[middle - 1]) r = middle;
    else l = middle;
  }
  return result;
};
console.log("[ partMinValueIndex ] >", partMinValueIndex(arr3));
export default {};
