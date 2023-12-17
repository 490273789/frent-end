// proxy 和 reflect
// proxy - 代理 - 拦截的作用

const obj = {
  id: 1,
  name: "jack",
  _name: "star",
  age: 18,
  plans: [
    { id: 1, plan: "篮球" },
    { id: 12, plan: "足球" },
  ],
};

const objProperty = {
  count: 12,
};

const proxy = new Proxy(obj, {
  /**
   * 属性读取操作劫持
   * @param {*} target 原对象
   * @param {*} prop 对象的key
   * @param {*} receiver proxy的对象
   * @returns
   */
  get(target, prop, receiver) {
    console.log("get 劫持");
    console.log("target:", target, "prop:", prop);
    console.log("receiver:", receiver);
    return Reflect.get(target, prop);
  },

  /**
   * 设置属性操作劫持
   * @param {*} target 原对象
   * @param {*} props 对象的key
   * @param {*} value 新的值
   * @param {*} receiver 最初被调用的对象
   */
  set(target, props, value, receiver) {
    console.log("set 劫持");
    console.log("target:", target, "props:", props);
    console.log("value:", value, "receiver:", receiver);
    Reflect.set(target, props, value);
  },

  /**
   * in 操作符的劫持
   * target: 原对象
   * key: 带查询对象的key
   */
  has(target, key) {
    console.log("has 劫持");
    console.log("target:", target, "key:", key);
    if (key[0] === "_") return false;
    return Reflect.has(target, key);
  },

  /**
   * delete 操作符的劫持
   * target: 原对象
   * prop: 待删除对象的key
   */
  deleteProperty(target, prop) {
    console.log("deleteProperty 劫持");
    console.log("target:", target, "prop:", prop);
    if (key[0] === "_") return false;
    Reflect.deleteProperty(target, prop);
    return true;
  },

  /**
   * 对Object.defineProperty()操作的劫持
   * @param {*} target 原对象
   * @param {*} prop 待定义对象的key
   * @param {*} descriptor 待定义或修改的属性的描述符
   */
  defineProperty(target, prop, descriptor) {
    console.log("defineProperty 劫持");
    console.log("target:", target, "prop:", prop);
    if (key[0] === "_") return false;
    Reflect.defineProperty(target, prop, descriptor);
    return true;
  },

  /**
   * 对Object.getOwnPropertyDescriptor劫持
   * @param {*} target 目标对象
   * @param {*} prop 属性名称的描述
   */
  getOwnPropertyDescriptor(target, prop) {
    console.log("getOwnPropertyDescriptor 劫持");
    console.log("target:", target, "prop:", prop);
    if (key[0] === "_") return false;
    Reflect.getOwnPropertyDescriptor(target, prop);
    return true;
  },

  /**
   * 对设置对象原型进行劫持
   * @param {*} target 被拦截目标对象
   * @param {*} prototype 对象新原型或为null
   */
  setPrototypeOf(target, prototype) {
    console.log("getOwnPropertyDescriptor 劫持");
    console.log("target:", target, "prototype:", prop);
    if (prototype === undefined) return false;
    Reflect.setPrototypeOf(target, prototype);
  },

  /**
   * 当读取对象的原型的时候会劫持
   * @param {*} target 目标对象
   */
  getPrototypeOf(target) {
    console.log("getPrototypeOf 劫持");
    console.log("target:", target);
    return Reflect.getPrototypeOf(target);
  },
  /**
   * 当获取对象自身key属性的时候劫持
   * @param {*} target 目标对象
   */
  ownKeys(target) {
    console.log("ownKeys 劫持");
    console.log("target:", target);
    return Reflect.ownKeys(target);
  },

  /**
   * 对获取对象可拓展属性劫持
   * @param {*} target 目标对象
   */
  isExtensible(target) {
    console.log("isExtensible 劫持");
    console.log("target:", target);
    return Reflect.isExtensible(target);
  },

  /**
   * 对设置对象的可拓展进行拦截
   * @param {*} target 目标对象
   */
  preventExtensions(target) {
    console.log("preventExtensions 劫持");
    console.log("target:", target);
    Reflect.preventExtensions(target);
    return true;
  },
  /**
   * 拦截new 操作符
   * @param {*} target
   * @param {*} args
   */
  construct(target, args) {
    Reflect.construct(target, args);
  },

  /**
   * 拦截函数的调用
   * @param {*} target 目标函数
   * @param {*} thisArg 呗调用时的赏上下文对象
   * @param {*} argumentList 被调用时的参数数组
   * @returns 可返回任意值
   */
  apply(target, thisArg, argumentList) {
    console.log("preventExtensions 劫持");
    console.log("target:", target, "thisArg:", thisArg);
    console.log("argumentList:", argumentList);
    return Reflect.apply(target, thisArg, argumentList);
  },
});

proxy.name; // 会触发get劫持
proxy.age = 19; // 会出发set劫持
console.log("name" in proxy); // has 劫持
console.log("_name" in proxy); // has 劫持
Object.defineProperty(proxy, "number", {
  configurable: true,
  enumerable: true,
  value: 10,
}); // defineProperty劫持

Object.getOwnPropertyDescriptor(proxy, number); // getOwnPropertyDescriptor劫持
console.log(Object.getPrototypeOf(proxy)); // getPrototypeOf劫持
console.log(Object.getPrototypeOf(proxy).count); // getPrototypeOf 劫持
console.log(Object.getOwnPropertyNames(proxy)); // ownKeys劫持
console.log(Object.isExtensible());
console.log(Object.preventExtensions(proxy1));
console.log(Object.isExtensible());
// console.log(proxy);
// console.log(proxy.name);
// console.log(proxy.hobby[1]);
// console.log(proxy.config[0].title);
