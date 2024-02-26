// 十进制转二进制
// 输入35 输出100011

const decimalToBinary = (decimal: number) => {
  const stack = [];
  let binary = "0b";
  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  while (stack.length) {
    binary += stack.pop();
  }
  return binary;
};
console.log(decimalToBinary(35));
