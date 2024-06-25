// 返回一个数组
// 数组长度 [0, length - 1]
// 数组的每个值 [0, max - 1]
const lengthAndValueRandom = (length, max) => {
  const len = (Math.random() * length) | 0;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = (Math.random() * max) | 0;
  }
  return arr;
};

// 验证数组是否升序
const sort = (arr) => {
  const length = arr.length;
  if (length < 2) return true;
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

// 对数器
const validateNumber = (callback, maxLength = 50, maxValue = 500, testCount = 10000) => {
  const arr = lengthAndValueRandom(maxLength, maxValue);
  const sortArr = callback(arr);
  for (let i = 0; i < testCount; i++) {
    if (!sort(sortArr)) {
      console.log("[ '排序错误' ] >", arr, sortArr);
      return;
    }
  }
  console.log("排序正确");
};

export default validateNumber;
