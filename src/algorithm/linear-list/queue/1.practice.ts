// 击鼓传花问题
// 一些人围成一圈，数到n，第n个人淘汰，知道最后一个人
// 得出最后一个人的位置，或者名字

const countGame = (data, num) => {
  const queue = [...data];
  let index = 0;
  while (queue.length > 1) {
    const item = queue.shift();
    index++;
    if (index !== num) queue.push(item);
    else index = 0;
  }
  return queue[0];
};

const list = [1, 2, 3, 4];
console.log(countGame(list, 3));
