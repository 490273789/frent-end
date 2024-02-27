const testOrderSearch = (fn) => {
  const MAX_LENGTH = 10000000;
  const array = new Array(MAX_LENGTH).fill(0).map((_, index) => index);
  const target = 9999999;

  const startTime = performance.now();
  const index = fn(array, target);
  const endTime = performance.now();

  console.log("索引：", index);
  console.log("消耗时间：", endTime - startTime);
};
