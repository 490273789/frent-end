// 全局变量，用于临时存储当前正在执行的 effect 函数
let activeEffect = null;

// 创建一个 Signal
function createSignal(initialValue) {
  let value = initialValue;
  const subscribers = new Set(); // 存储依赖此 Signal 的 effect

  // 读取 value 时收集依赖
  const getter = () => {
    if (activeEffect) {
      subscribers.add(activeEffect); // 将当前 effect 加入订阅者列表
    }
    return value;
  };

  // 修改 value 时触发更新
  const setter = (newValue) => {
    value = newValue;
    // 通知所有订阅者重新执行
    subscribers.forEach((effect) => effect());
  };

  return [getter, setter];
}

// 创建一个自动追踪依赖的 effect
function createEffect(fn) {
  const effect = () => {
    activeEffect = effect; // 临时保存当前 effect
    fn(); // 执行函数（触发依赖收集）
    activeEffect = null; // 重置
  };
  effect(); // 立即执行一次以初始化依赖
}

// 使用示例
const [count, setCount] = createSignal(0);

createEffect(() => {
  console.log("Effect1:", count());
});

createEffect(() => {
  console.log("Effect2:", count());
});

setCount(10); // 输出 "Count changed: 10"
setCount(20); // 输出 "Count changed: 20"

// computed implementation
function computed(fn) {
  const [value, setValue] = createSignal();
  createEffect(() => setValue(fn())); // 自动更新衍生值
  return value;
}

// 使用示例
const double = computed(() => count() * 2);
createEffect(() => {
  console.log("Double is:", double());
});

setCount(3); // 输出 "Double is: 6"
