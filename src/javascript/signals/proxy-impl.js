// 全局变量，存储当前正在执行的 effect 函数
let activeEffect = null;

// 创建一个响应式对象（核心）
function createReactive(obj) {
  // 缓存已代理对象，避免重复代理
  const proxyCache = new WeakMap();

  // 每个属性的依赖关系表：{ target: { key: Set<effect> } }
  const depsMap = new WeakMap();

  // 获取某个属性的依赖集合
  function getDeps(target, key) {
    let targetDeps = depsMap.get(target);
    if (!targetDeps) {
      targetDeps = new Map();
      depsMap.set(target, targetDeps);
    }
    let keyDeps = targetDeps.get(key);
    if (!keyDeps) {
      keyDeps = new Set();
      targetDeps.set(key, keyDeps);
    }
    return keyDeps;
  }

  // 创建 Proxy 处理器
  const handler = {
    get(target, key, receiver) {
      // 递归代理嵌套对象
      const value = Reflect.get(target, key, receiver);
      if (typeof value === "object" && value !== null) {
        return createReactive(value); // 返回嵌套对象的代理
      }

      // 收集依赖
      if (activeEffect) {
        const deps = getDeps(target, key);
        deps.add(activeEffect);
      }
      return value;
    },

    set(target, key, value, receiver) {
      // 触发更新
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);

      // 只有当值变化时触发
      if (oldValue !== value) {
        const deps = getDeps(target, key);
        deps.forEach((effect) => effect());
      }
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      const deps = getDeps(target, key);
      deps.forEach((effect) => effect());
      return result;
    },
  };

  // 返回代理对象
  if (proxyCache.has(obj)) {
    return proxyCache.get(obj);
  }
  const proxy = new Proxy(obj, handler);
  proxyCache.set(obj, proxy);
  return proxy;
}

// 创建自动追踪依赖的 effect
function createEffect(fn) {
  const effect = () => {
    activeEffect = effect;
    fn();
    activeEffect = null;
  };
  effect();
}

// 使用示例
const state = createReactive({
  count: 0,
  user: { name: "Alice" },
  list: [1, 2, 3],
});

// 监听 state.count
createEffect(() => {
  console.log(`Count changed: ${state.count}`);
});

// 监听 state.user.name
createEffect(() => {
  console.log(`User name changed: ${state.user.name}`);
});

// 监听数组变化
createEffect(() => {
  console.log(`List length: ${state.list.length}`);
});

// 触发更新
state.count = 10; // 输出 "Count changed: 10"
state.user.name = "Bob"; // 输出 "User name changed: Bob"
state.list.push(4); // 输出 "List length: 4"
