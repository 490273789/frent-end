import test from "./index";

// 全量迭代
const testFindNum = (target: number[], number: number) => {
  for (let i = 0; i < target.length; i++) {
    if (target[i] === number) return true;
  }
  return false;
};

// 有序数组中找到num
const findNum = (target: number[], number: number) => {
  if (target.length < 2) return false;

  let leftIndex = 0,
    rightIndex = target.length - 1;

  while (leftIndex <= rightIndex) {
    // const midIndex = ((rightIndex + leftIndex) / 2) | 0;
    const midIndex = (rightIndex + leftIndex) >> 1;
    if (target[midIndex] === number) return true;
    else if (number > target[midIndex]) leftIndex = midIndex + 1;
    else rightIndex = midIndex - 1;
  }
  return false;
};

test(findNum, testFindNum);
