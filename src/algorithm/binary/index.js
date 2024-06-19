const printBinary = (number) => {
  let result = [];
  for (let i = 31; i >= 0; i--) {
    result += (number & (1 << i)) === 0 ? "0" : "1";
  }
  console.log("[ result ] >", result);
};

printBinary(6);

// 左移 <<
// 值为x
// 左移一位就是x * 2
// 左移 n 位 x * 2 ^ n

// 32位的二进制能表示多少位无符号数呢？
// 2 ^ 32 -1
// 为啥要减1，因为正数时从0开始数，参考数组的index和长度的关系
// 32位的二进制能表示多少位有符号数呢？
// 最高位是符号位
// 正数：2 ^ 31 - 1
// 负数： - 2 ^ 31
// 00 能表示多少位无符号 2 ^ 2
// 00 - 0
// 01 - 1
// 10 - 2
// 11 - 3

// x 的取反 + 1 就是他的相反数

// 注意 32位的数字 最小数字 取反 +1是自己，0 取反 + 1也是自己 ，不知道为啥，取反+1自己走一遍
// 算法
// 1、有具体的问题
// 2、设计具体的流程去解决这个问题
// 3、有评价处理流程的可量化指标
