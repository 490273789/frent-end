// Insert Sort

// 左侧第一个元素默认为最小元素
// 第二个元素与第一个元素比较，前两个元素有序
// 第三个元素与前两个元素比较插入到合适的位置，前三个元素有序
const insertSort = (target: number[]) => {
  const arr = [...target];
  if (target.length < 2) return arr;
  const n = target.length;
  for (let base = 1; base < n; base++) {
    let item = arr[base];
    let i = base - 1;
    while (i >= 0 && arr[i] > item) {
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = item;
  }
  return arr;
};

const testArr = [9, 4, 8, 5, 6, 1];
console.log("[ insertSort(testArr) ] >", insertSort(testArr));

export default {};
