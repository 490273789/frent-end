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
// 有序数组中找到 <= num 最右的位置
// 局部最小问题
