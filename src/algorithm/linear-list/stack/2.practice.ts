// 有效的括号
// 输入只有 [] {} []
// 输入 () 返回true
// 输入 {()}[] 返回true
// 输入 {) 返回false

const validateString = (string: string) => {
  const stack: string[] = [];
  for (let i = 0; i < string.length; i++) {
    const s = string[i];
    if (s === "(") stack.push(")");
    else if (s === "{") stack.push("}");
    else if (s === "[") stack.push("]");
    else {
      if (!(s === stack.pop())) return false;
    }
  }
  return stack.length === 0;
};
console.log("期待值：false", "结果：", validateString("{"));
console.log("期待值：true", "结果：", validateString("{([])}[]"));
console.log("期待值：false", "结果：", validateString("{)"));
console.log("期待值：false", "结果：", validateString("{{{()}"));
console.log("期待值：true", "结果：", validateString("{}(){}"));
