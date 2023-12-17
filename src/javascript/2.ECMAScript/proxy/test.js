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
