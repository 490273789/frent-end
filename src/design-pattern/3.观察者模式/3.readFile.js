const fs = require("fs");
const readline = require("readline");

const createStream = fs.createReadStream("./design-pattern/3.观察者模式/test.txt");

let length = 0;

createStream.on("data", (chunk) => {
  length += chunk.toString().length;
});

createStream.on("end", () => {
  console.log(length);
});

let lineNum = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./design-pattern/3.观察者模式/test.txt"),
});

rl.on("line", () => {
  lineNum++;
});

rl.on("close", () => {
  console.log("lineNum:", lineNum);
});
