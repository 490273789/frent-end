/**
 * 生成随机数组
 * @param maxSize 数组最大长度
 * @param maxValue 数组最大值
 * @returns 随机数组
 */
export const generateRandomArray = (maxSize: number, maxValue: number) => {
  const arr = [];
  for (let i = 0; i < maxSize; i++) {
    arr.push((Math.random() * maxValue) | 0);
  }
  return arr;
};

/**
 * 生成随机整数
 * @param maxValue 最大值
 * @returns 随机数
 */
export const generateRandomNumber = (maxValue: number) => {
  return (Math.random() * maxValue) | 0;
};
