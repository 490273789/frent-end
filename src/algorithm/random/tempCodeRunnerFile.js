const sort = (arr) => {
  const length = arr.length;
  if (length < 2) return true;
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};
console.log("[ sort ] >", sort([1, 2, 3, 5, 4]));