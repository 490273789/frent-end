import { generateRandomArray } from "../utils/random";

type fn = (arr: number[], number: number) => boolean;

/**
 * 对数器
 * @param fn 原函数
 * @param testFn 测试函数
 * @param testTime 测试次数
 * @param maxSize 数组最大长度
 * @param maxValue 数组最大值
 */
const test = (fn: fn, testFn: fn, testTime = 10000, maxSize = 10, maxValue = 100) => {
  let succeed = true;
  for (let i = 0; i < testTime; i++) {
    const arr = generateRandomArray(maxSize, maxValue);
    const number = Math.random() * maxValue;
    if (fn(arr, number) !== testFn(arr, number)) {
      succeed = false;
      break;
    }
  }
  console.log("[ succeed ] >", succeed);
};

export default test;
