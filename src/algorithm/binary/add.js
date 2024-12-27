const add = (a, b) => {
  let sum = a;
  while (b !== 0) {
    sum = a ^ b; // 无进位相加
    b = (a & b) << 1; // 相加的进位信息
    a = sum;
  }
  return sum;
};

const negNum = (num) => {
  return add(~num, 1);
};

// #console.log(add(7, negNum(14)));
// console.log(add(28, 4));

const multiply = (a, b) => {
  // 判断b 不是0
  let result = 0;
  while (b !== 0) {
    // 判断b的最后一位是否为0
    if ((b & 1) !== 0) {
      result = add(result, a);
    }
    // 后面补零
    a <<= 1;
    // 移除最后一位
    b >>>= 1;
  }
  return result;
};

console.log(multiply(20, 11));
