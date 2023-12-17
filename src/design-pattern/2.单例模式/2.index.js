// js使用闭包实现单例模式
const generateGetinstance = () => {
  let instance;

  class SingleStore {}

  return () => {
    if (instance === null) instance = new SingleStore();
    return instance;
  };
};

const getInstance = generateGetinstance();
const sd1 = getInstance();
const sd2 = getInstance();

console.log(sd1 === sd2);

// 使用模块化 - 也是闭包的原理
// let instance;

// class SingleStore {}

// export () => () => {
//   if (instance === null) instance = new SingleStore();
//   return instance;
// }

