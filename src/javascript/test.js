function quadratic(n) {
  // 矩阵占用 O(n^2) 空间
  const numMatrix = Array(n)
    .fill(null)
    .map(() => Array(n).fill(null));
  // 二维列表占用 O(n^2) 空间
  const numList = [];
  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < n; j++) {
      tmp.push(0);
    }
    numList.push(tmp);
  }

  console.log("[ numMatrix ] >", numMatrix);
  console.log("[ numList ] >", numList);
}

quadratic(3);
