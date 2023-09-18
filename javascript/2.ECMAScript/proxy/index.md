# Proxy 和 Reflect

## Proxy - 代理

- 代理：可代理对象/数组/方法
- 拦截：提供了 13 中拦截方法

```javaScript
/**
 * 第一个参数：要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
 * 第二个参数：拦截器对象，里面定义需要使用的拦截器
 */
const proxy = new Proxy(targe, handler)
```

如下是 Proxy 13 个拦截器的 ts 定义，接下来让我们一个一个看看他们集具体的使用吧！

```typeScript
interface ProxyHandler<T extends object> {
    apply?(target: T, thisArg: any, argArray: any[]): any;

    construct?(target: T, argArray: any[], newTarget: Function): object;

    defineProperty?(target: T, property: string | symbol, attributes: PropertyDescriptor): boolean;

    deleteProperty?(target: T, p: string | symbol): boolean;

    get?(target: T, p: string | symbol, receiver: any): any;

    getOwnPropertyDescriptor?(target: T, p: string | symbol): PropertyDescriptor | undefined;

    getPrototypeOf?(target: T): object | null;

    has?(target: T, p: string | symbol): boolean;

    isExtensible?(target: T): boolean;

    ownKeys?(target: T): ArrayLike<string | symbol>;

    preventExtensions?(target: T): boolean;

    set?(target: T, p: string | symbol, newValue: any, receiver: any): boolean;

    setPrototypeOf?(target: T, v: object | null): boolean;
}

```

## reflect - 反射

是一个内置对象，提供了拦截 javascript 的方法，这些方法和 Proxy 中的拦截方法一一对应。

### 应用

#### get 劫持

方法会拦截目标对象的以下操作：

- 访问属性：proxy[name] 和 proxy.name
- 访问原型链上的属性：Object.create(proxy)[name]
- Reflect.get(proxy, name)

```javaScript
const obj = { name: "jack" };
const proxy = new Proxy(obj, {
  /**
   * 属性读取操作劫持
   * @param {*} target 原对象
   * @param {*} prop 对象的key
   * @param {*} receiver proxy的对象
   * @returns 任意值
   */
  get(target, prop, receiver) {
    console.log("get 劫持");
    console.log("target:", target, "prop:", prop);
    console.log("receiver:", receiver);
    return Reflect.get(target, prop);
  },
})

 // 触发get劫持
console.log(proxy.name;)

```

#### set 劫持

该方法会拦截目标对象的以下操作：

- 指定属性值：proxy[name] = 'hy' 和 proxy.name = 'hy'
- 指定继承者的属性值：Object.create(proxy)[name] = 'hy'
- Reflect.set(proxy, name, 'hy')

```javaScript
const obj = { name: "jack" };
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
    Reflect.set(target, props, value);
    return true
  }
})

console.log(proxy.name = 'hy')
console.log(proxy)
```
