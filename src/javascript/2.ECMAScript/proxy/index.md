# Proxy - 代理

- 代理：可代理对象/数组/方法

- 拦截：提供了 13 中拦截方法

## 1. 定义Proxy

```javaScript
/**
 * @param {*} targe 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，另一个代理）。
 * @param {*} handler 拦截器对象，里面定义需要使用的拦截器
 */
const proxy = new Proxy(targe, handler)
```

## 2. Proxy拦截器的 ts 定义。

> 每个拦截函数都是可选的

```typeScript
interface ProxyHandler<T extends object> {
  apply?(target: T, thisArg: any, argArray: any[]): any;
  construct?(target: T, argArray: any[], newTarget: Function): object;
  defineProperty?(target: T, property: string | symbol, attributes:   PropertyDescriptor): boolean;
  deleteProperty?(target: T, p: string | symbol): boolean;
  get?(target: T, p: string | symbol, receiver: any): any;
  getOwnPropertyDescriptor?(target: T, p: string | symbol):   PropertyDescriptor | undefined;
  getPrototypeOf?(target: T): object | null;
  has?(target: T, p: string | symbol): boolean;
  isExtensible?(target: T): boolean;
  ownKeys?(target: T): ArrayLike<string | symbol>;
  preventExtensions?(target: T): boolean;
  set?(target: T, p: string | symbol, newValue: any, receiver: any):   boolean;
  setPrototypeOf?(target: T, v: object | null): boolean;
}
```

## 3. Proxy拦截器应用

> 以下代码可以直接复制到js文件中执行,方便查看效果,每个方法只写了一个触发条件用作测试,大家可以根据提供的其他触发条件进行实操,加深印象!

### get

该方法会拦截目标对象的以下操作：

- 访问属性：`proxy[foo] 和` `proxy.bar`
- 访问原型链上的属性：`Object.create(proxy)[foo]`
- [`Reflect.get()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)

```javaScript
const obj = { name: "Jack" };

const proxy = new Proxy(obj, {
   /**
    * 属性读取操作劫持
    * @param {*} target 原对象
    * @param {*} prop 对象的key
    * @param {*} receiver proxy的对象
    * @returns 可返回任意值
    */
    get(target, prop, receiver) {
      console.log("get 劫持");
      console.log("target:", target, "prop:", prop, "receiver:", receiver);
      return Reflect.get(target, prop);
    },
});

// 触发 get 劫持
console.log(proxy.name);
```

### set

该方法会拦截目标对象的以下操作：

- 指定属性值：`proxy[foo] = bar` 和 `proxy.foo = bar`
- 指定继承者的属性值：`Object.create(proxy)[foo] = bar`
- [`Reflect.set()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)

```javaScript

const obj = { name: "Jack" };

const proxy = new Proxy(obj, {
   /**
    * 设置属性操作劫持
    * @param {*} target 原对象
    * @param {*} props 对象的key
    * @param {*} value 新的值
    * @param {*} receiver 最初被调用的对象
    * @returns boolean
    */
    set(target, props, value, receiver) {
      console.log("set 劫持");
      console.log("target:", target, "props:", props);
      console.log("value:", value, "receiver:", receiver);
      return Reflect.set(target, props, value);
    }
});

// 触发 set 劫持
console.log(proxy.name = 'hy');
console.log(proxy);
```

### has

该方法会拦截目标对象的以下操作:

- 属性查询：`foo in proxy`
- 继承属性查询：`foo in Object.create(proxy)`
- `with` 检查`: with(proxy) { (foo); }`
- [`Reflect.has()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)

```javaScript
const obj = { name: "Jack", _name: 'Ming' };

const proxy = new Proxy(obj, {
 /**
  * in 操作符的劫持
  * @param {*} target: 原对象
  * @param {*} prop: 带查询对象的key
  * @returns boolean
  */
  has(target, prop) {
    console.log("has 劫持");
    console.log("target:", target, "prop:", prop);
    if (prop[0] === "_") return false;
    return Reflect.has(target, prop);
  },
});

//触发 has 劫持
console.log("name" in proxy); // true
console.log("_name" in proxy); // false
```

### deleteProperty

该方法会拦截目标对象的以下操作:

- 删除属性：`delete proxy[foo]` 和 `delete proxy.foo`
- [`Reflect.deleteProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty)

```javaScript
const obj = { name: "Jack", _name: 'Ming' };

const proxy = new Proxy(obj, {
 /**
  * delete 操作符的劫持
  * @param {*} target: 原对象
  * @param {*} prop: 待删除对象的key
  * @returns boolean
  */
  deleteProperty(target, prop) {
    console.log("deleteProperty 劫持");
    console.log("target:", target, "prop:", prop);
    if (prop[0] === "_") return false;
    return Reflect.deleteProperty(target, prop);
  },
});

// 触发 deleteProperty 劫持
console.log(delete proxy.name); // true
console.log(delete proxy._name); // false
```

### defineProperty

该方法会拦截目标对象的以下操作：

- [`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- [`Reflect.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty)
- [`proxy.property='value'`]

```javascript
const obj = { name: "Jack", _name: "Ming" };

const proxy = new Proxy(obj, {
  /**
   * 对Object.defineProperty()操作的劫持
   * @param {*} target 原对象
   * @param {*} prop 待定义对象的key
   * @param {*} descriptor 待定义或修改的属性的描述符
   * @returns boolean
   */
  defineProperty(target, prop, descriptor) {
    console.log("defineProperty 劫持");
    console.log("target:", target, "prop:", prop);
    if (prop[0] === "_") return false;
    Reflect.defineProperty(target, prop, descriptor);
    return true;
  },
});

// 触发 defineProperty 劫持
Object.defineProperty(proxy, "name", {
  configurable: true,
  enumerable: true,
  value: "Amy",
});

// 劫持“_”返回false,会直接报错
Object.defineProperty(proxy, "_name", {
  configurable: true,
  enumerable: true,
  value: "Amy",
});
```

### getOwnPropertyDescriptor

该方法会拦截目标对象的以下操作：

- [`Object.getOwnPropertyDescriptor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
- [`Reflect.getOwnPropertyDescriptor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor)

```javascript
const obj = { name: "Jack", _name: "Ming" };

const proxy = new Proxy(obj, {
  /**
   * 对Object.getOwnPropertyDescriptor劫持
   * @param {*} target 目标对象
   * @param {*} prop 属性名称的描述
   * @returns PropertyDescriptor(对象) | undefined
   */
  getOwnPropertyDescriptor(target, prop) {
    console.log("getOwnPropertyDescriptor 劫持");
    console.log("target:", target, "prop:", prop);
    if (prop[0] === "_") return undefined;
    return Reflect.getOwnPropertyDescriptor(target, prop);
  },
});

// 触发 getOwnPropertyDescriptor 劫持
console.log(Object.getOwnPropertyDescriptor(proxy, "name")); // { value: 'Jack', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(proxy, "_name")); // undefined
```

### setPrototypeOf

该方法会拦截目标对象的以下操作：

- [`Object.setPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
- [`Reflect.setPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf)

```javascript
const obj = { name: "Jack" };

const proxy = new Proxy(obj, {
  /**
   * 对设置对象原型进行劫持
   * @param {*} target 被拦截目标对象
   * @param {*} prop 对象新原型或为null
   * @returns boolean
   */
  setPrototypeOf(target, prop) {
    console.log("getOwnPropertyDescriptor 劫持");
    console.log("target:", target, "prop:", prop);
    if (prop === undefined) return false;
    Reflect.setPrototypeOf(target, prop);
  },
});

// 触发 setPrototypeOf 劫持
console.log(Object.setPrototypeOf(proxy, { age: 18 })); // { name: 'Jack' }
console.log(Object.getPrototypeOf(proxy)); // { age: 18 }
console.log(Object.setPrototypeOf(proxy, null)); // TypeError
```

### getPrototypeOf

该方法会拦截目标对象的以下操作：

- [`Object.getPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
- [`Reflect.getPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf)
- [`Object.prototype.__proto__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- [`Object.prototype.isPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)
- [`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)

```javascript
const obj = { name: "Jack" };
const prototype = { age: 18 };

const proxy = new Proxy(obj, {
  /**
   * 当读取对象的原型的时候会劫持
   * @param {*} target 目标对象
   * @returns object | null
   */
  getPrototypeOf(target) {
    console.log("getPrototypeOf 劫持");
    console.log("target:", target);
    return Reflect.getPrototypeOf(target);
  },
});

// 触发 getPrototype 劫持
Object.setPrototypeOf(proxy, prototype);
console.log(Object.getPrototypeOf(proxy)); // { age: 18 }
```

### ownKeys

该方法会拦截目标对象的以下操作：

- [`Object.getOwnPropertyNames()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [`Object.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Reflect.ownKeys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)

```javascript
const obj = { name: "Jack" };

const proxy = new Proxy(obj, {
  /**
   * 当获取对象自身key属性的时候劫持
   * @param {*} target 目标对象
   * @returns 可枚举对象
   */
  ownKeys(target) {
    console.log("ownKeys 劫持");
    console.log("target:", target);
    return Reflect.ownKeys(target);
  },
});

// 触发 ownKeys 劫持
console.log(Object.keys(proxy)); // [ 'name' ]
```

### isExtensible

该方法会拦截目标对象的以下操作：

- [`Object.isExtensible()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)
- [`Reflect.isExtensible()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible)

```javascript
const obj = { name: "Jack" };

const proxy = new Proxy(obj, {
  /**
   * 对获取对象可拓展属性劫持
   * @param {*} target 目标对象
   * @returns boolean
   */
  isExtensible(target) {
    console.log("isExtensible 劫持");
    console.log("target:", target);
    return Reflect.isExtensible(target);
  },
});

// 触发 isExtensible 劫持
console.log(Object.isExtensible(proxy));
```

### preventExtensions

该方法会拦截目标对象的以下操作：

- [`Object.preventExtensions()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)
- [`Reflect.preventExtensions()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions)

```javascript
const obj = { name: "Jack" };

const proxy = new Proxy(obj, {
  /**
   * 对设置对象的可拓展进行拦截
   * @param {*} target 目标对象
   * @returns boolean
   */
  preventExtensions(target) {
    console.log("preventExtensions 劫持");
    console.log("target:", target);
    return Reflect.preventExtensions(target);
  },
});

// 触发 preventExtensions 劫持
console.log(Object.isExtensible(proxy)); // true
console.log(Object.preventExtensions(proxy));
console.log(Object.isExtensible(proxy)); // false
```

### construct

该拦截器可以拦截以下操作：

- `new proxy(...args)`
- [`Reflect.construct()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct)

```javascript
function People(name) {
  this.name = name;
}

const proxy = new Proxy(People, {
  /**
   * 拦截new 操作符
   * @param {*} target
   * @param {*} args
   * @returns 必须返回一个对象
   */
  construct(target, args) {
    Reflect.construct(target, args);
  },
});

// 触发 construct 劫持
console.log(new proxy("Jack")); // { name: 'Jack' }
```

### apply

该拦截器可以拦截以下操作：

- `proxy(...args)`
- [`Function.prototype.apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 和 [`Function.prototype.call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [`Reflect.apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)

```javascript
function joinName(first, last) {
  return first + last;
}

const proxy = new Proxy(joinName, {
  /**
   * 拦截函数的调用
   * @param {*} target 目标函数
   * @param {*} thisArg 被调用时的赏上下文对象
   * @param {*} argumentList 被调用时的参数数组
   * @returns 可返回任意值
   */
  apply(target, thisArg, argumentList) {
    console.log("preventExtensions 劫持");
    console.log("target:", target, "thisArg:", thisArg);
    console.log("argumentList:", argumentList);
    return Reflect.apply(target, thisArg, argumentList) + "你被劫持啦";
  },
});

// 触发 apply 劫持
console.log(joinName("Q", "HY")); // QHY
console.log(proxy("Q", "HY")); // QHY你被劫持啦
```

> 本文是自学proxy的过程中整理的方便以后查看,主要参考了[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)的讲解,大家也可以直接去阅读MDN相关的文档,有理解错误的地方欢迎指正!
