2 ^ 16;
console.log("2 ^ 7:", 2 ** 7);
console.log("2 ^ 8:", 2 ** 8);
console.log("2 ^ 9:", 2 ** 9);
console.log("2 ^ 10:", 2 ** 10);

console.log("[ 2024 % 2 ] >", 2024 % 2);

const is2Power = (number) => {
  if (number <= 0) return;
  while (number > 1) {
    if (number % 2 !== 0) return false;
    number /= 2;
  }
  return true;
};

const is2PowerPro = (number) => number > 0 && (number & (number - 1)) === 0;

console.log("[ ----------is2Power--------- ]");
console.log("[ is2Power(8) ] >", is2Power(8));
console.log("[ is2Power(10) ] >", is2Power(10));
console.log("[ is2Power(99) ] >", is2Power(99));
console.log("[ is2Power(1024) ] >", is2Power(1024));
console.log("[ ----------is2PowerPro--------- ]");
console.log("[ is2PowerPro(8) ] >", is2PowerPro(8));
console.log("[ is2PowerPro(10) ] >", is2PowerPro(10));
console.log("[ is2PowerPro(99) ] >", is2PowerPro(99));
console.log("[ is2PowerPro(1024) ] >", is2PowerPro(1024));

// 两个数交换
let a = 5,
  b = 3;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("[ a, b] >", a, b);
