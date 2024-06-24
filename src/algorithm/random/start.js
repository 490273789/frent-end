// Math.random() 返回一个随机数
// [0, 1) 等概率的返回0到1范围上左闭右开的随机数

// 验证等概率
const validateEqualProbability = (range = 0.1) => {
  let times = 100000;
  let count = 0;
  for (let i = 0; i <= times; i++) {
    if (Math.random() < range) count++;
  }
  return count / times;
};

console.log("[ validateEqualProbability(0.1) ] >", validateEqualProbability());
console.log("[ validateEqualProbability(0.2) ] >", validateEqualProbability(0.2));
console.log("[ validateEqualProbability(0.3) ] >", validateEqualProbability(0.3));
console.log("[ validateEqualProbability(0.4) ] >", validateEqualProbability(0.4));
console.log("[ validateEqualProbability(0.5) ] >", validateEqualProbability(0.5));
console.log("[ validateEqualProbability(0.6) ] >", validateEqualProbability(0.6));
console.log("[ validateEqualProbability(0.7) ] >", validateEqualProbability(0.7));
console.log("[ validateEqualProbability(0.8) ] >", validateEqualProbability(0.8));
console.log("[ validateEqualProbability(0.9) ] >", validateEqualProbability(0.9));

// [0, 1) * 8 = [0, 8)
const getRange = (start, end) => Math.random() * (end - start) + start;
console.log("[ getRange ] >", getRange(4, 8));

// 获取整数 传入k 得到的范围是 [0, k-1] 这个范围内每个数都是等概率的
const getRangeInt = (k) => (Math.random() * k) | 0;
console.log("[ getRangeInt ] >", getRangeInt(8));

const testRangeInt = () => {
  const times = 10000;
  const arr = new Array(8).fill(0);
  console.log("[ arr ] >", arr);
  for (let i = 0; i < times; i++) {
    arr[getRangeInt(8)]++;
  }
  console.log("[ arr ] >", arr);
};
testRangeInt();

// 0 ～ x的数出现的概率是一个线性表 O(n)

// 如果我想使 0 ～ x的数出现的概率是 x² ，x 越小出现的概率越小 参考 O(n²) 的曲线
// 出现一次的概率是x ，需要两次命中在0 ～ x上才能返回的是0 ～ x，x的范围越小出现的概率越小
const getPowerRandom = () => Math.max(Math.random(), Math.random());

const testPowerRandom = (k) => {
  const times = 10000;
  let count = 0;
  for (let i = 0; i < times; i++) {
    if (getPowerRandom() < k) count++;
  }
  console.log("[ getPowerRandom() ] >", count / times);
  console.log("[ getPowerRandom ] >", Math.pow(k, 2));
};

testPowerRandom(0.7);

// 从1 ～ 5随机到1 ～ 7 随机
// 从a ～ b随机到c ～ d 随机
// 01不等概率随机到01等概率随机
