const testOrderSearch = (fn: Function) => {
  const MAX_LENGTH = 10000000;
  const array = new Array(MAX_LENGTH).fill(0).map((_, index) => index);
  const target = 9999999;

  const startTime = performance.now();
  const index = fn(array, target);
  const endTime = performance.now();

  console.log("索引：", index);
  console.log("消耗时间：", endTime - startTime);
};

// const remove = (arr, index) => {
//   for (let i = index; i <= arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }

//   return arr;
// };

// const arr1 = [0, 1, 2, 3, 4, 5];
// remove(arr1, 2);
// console.log(arr1);

console.log(0 / 5);
