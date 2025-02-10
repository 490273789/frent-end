const a = "王";

const arrayBuffer = new ArrayBuffer(a);

console.log("[ arrayBuffer ] >", arrayBuffer);

let str = "Hello, 世界!";

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  let charCode = str.charCodeAt(i);
  let codePoint = str.codePointAt(i);

  console.log(`字符: ${char}, charCodeAt: ${charCode}, codePointAt: ${codePoint}`);
}

// 假设有一个文件输入框
let fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener("change", function (event) {
  let file = event.target.files[0];
  let reader = new FileReader();

  reader.onload = function (e) {
    let arrayBuffer = e.target.result; // 获取文件的 ArrayBuffer
    console.log(arrayBuffer);
  };

  reader.readAsArrayBuffer(file); // 以 ArrayBuffer 形式读取文件
});
