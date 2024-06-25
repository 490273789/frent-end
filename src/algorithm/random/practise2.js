// f 函数得到0的概率是 p，得到1的概率是 1 - p
// 通过f函数创建一个函数 要求等概率得到得到0 和 1
// 不等概率的0 ～ 1
const constRandom = () => (Math.random() < 0.85 ? 0 : 1);

// 等率的0 到1
// 00 -> 重做
// 11 -> 重做
// 10 -> 1
// 01 -> 0

const equalRandom = () => {
  let result;
  do {
    result = constRandom();
  } while (result === constRandom());
  return result;
};

// 测试

let times = 10000;
const arr = new Array(2).fill(0);
for (let i = 0; i < times; i++) {
  arr[equalRandom()]++;
}
console.log("[ arr ] >", arr);

export {};
