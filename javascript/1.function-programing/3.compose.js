// 组合函数
// 数据 a经过多个函数的处理 最终返回b
// 柯里化实现原理
function curry (fn) {
  return function currying (...args) {
    if(arguments.length < fn.length) {
      return (...args1) => currying(...args, ...args1);
    }
    return fn(...args);
  }
}

// compose中的函数只能传入一个参数，配合curry一起使用，可以实现多个参数一起传入
const log = curry((title, value) => (console.log(title, value), value));

// 处理函数1
const fn1 = arg => arg.toUpperCase();

// 处理函数2
const fn2 = arg => arg.split('-');

// 处理函数3
const fn3 = arg => arg.reverse();

// 1. 调用compose函数，传入处理函数，函数依据传入的顺讯从右往左运行
// 2. 返回一个函数，传入需要处理的数据
// 3. 返回结果
const compose = (...args) => value => args.reduceRight((pre, item) => item(pre) , value);

// 使用验证
const composed = compose(fn3, log('fn2处理结果：'),fn2, log('fn1处理结果：'), fn1);

console.log(composed('w-s-n'));