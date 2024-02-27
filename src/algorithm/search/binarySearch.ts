// 二分查找
export const binarySearch = (array: number[], target: number) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let center = Math.floor((left + right) / 2);
    if (array[center] === target) return center;
    if (array[center] > target) right = center - 1;
    else left = center + 1;
  }
  return -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
