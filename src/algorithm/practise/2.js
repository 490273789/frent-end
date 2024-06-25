// 给定一个数组, 索引为i 求 前i项的累加和

// step1：根据给定的数组计算出一个累加和的数组

const accumulate = (arr) => {
  let n = arr.length,
    i = 1;
  const result = [];
  result[0] = arr[0];
  while (i < n) {
    result[i] = result[i - 1] + arr[i];
    i++;
  }
  return result;
};

// step2：根据上面的结果计算前i项的和
// 第 0 ～ 5，直接就是 第5项的数据
// 第 2～ 5 用第[0,5] - [0,1] result[5] - result[1]
const accumulateArr = accumulate([1, 2, 3, 4, 5]);
console.log("[ accumulateArr ] >", accumulateArr);
const calculate = (start, end) => {
  return start === 0 ? accumulateArr[end] : accumulateArr[end] - accumulateArr[start - 1];
};

console.log("[ result[2,4] ] >", calculate(2, 4));
console.log("[ result[0,4] ] >", calculate(0, 4));
