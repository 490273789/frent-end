// 从1 ～ 5等概率随机到1 ～ 7 等概率随机
// 从a ～ b等概率随机到c ～ d 等概率随机
// 01不等概率随机到01等概率随机
const getInt = (start, end) => (Math.random() * end + start) | 0;

// 根据 one2Five 计算出 0 和 1的等概率发生器 - 核心
const zeroOrOne = () => {
  let num;
  do {
    num = getInt(1, 5);
  } while (num === 3);
  return num < 3 ? 0 : 1;
};

// 根据 zeroOrOne 计算 0 ~ 7, 三位二进制正好可以包含7 - 核心
const zero2Seven = () => (zeroOrOne() << 2) + (zeroOrOne() << 1) + zeroOrOne();

// 根据 zero2Seven 计算 1 ～ 7
const one2Seven = () => {
  let result;
  do {
    result = zero2Seven();
  } while (result === 0);
  return result;
};

let times = 1000;
const arr = new Array(10).fill(0);
for (let i = 0; i < times; i++) {
  arr[zero2Seven()]++;
}
console.log("[ arr[one2Seven()] ] >", arr);

// 核心是
// 1、先搞一个 等概率 发生器
// 2、看多少个二进制位可以包含最大数
export {};
