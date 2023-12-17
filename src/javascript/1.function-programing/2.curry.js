// 函数的柯里化
function sum (a, b, c) {
  return a + b + c;
}

// 柯里化实现原理
function curry (fn) {
  return function currying (...args) {
    if(arguments.length < fn.length) {
      return (...args1) => currying(...args, ...args1);
    }
    return fn(...args);
  }
}


// 检验
const curried = curry(sum);

console.log('结果1：',curried(1)(2)(3));
console.log('结果2：',curried(1,2)(3));
console.log('结果3：',curried(1)(2,3));
console.log('结果3：',curried(1,2,3));