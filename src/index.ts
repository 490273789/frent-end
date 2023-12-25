import { log } from "console";

log("Hello World");
// null 和 undefined是所有其他类型的子类型，可以赋值给任何类型
// 类型保护 - 配合类型保护进行判断

let name: string | undefined;
// name.  这里的name不会有方法属性的提示，因为不确定是string还是undefined - 这就是类型保护
if (typeof name === "string") {
  name.at(1);
}

// void - 表示没有任何类型，一般用来定义方法没有返回值
// never - 表示永远不会返回 ，函数永远不会结束
function throwError(msg: string): never {
  throw new Error(msg);
}

// 字面量约束
let gender: "male" | "female";
gender = "male";
gender = "female";

// 类型别名 type

// 函数重栽：在函数实现之前，对函数调用的多种情况进行类型约束
// 可选参数：可以在某些情况下省略参数
/**
 * 可选参数
 * @param name - name
 * @param age - age
 */
function hello(name: string, age?: number) {
  if (age) {
    log(`hello ${name} ${age}`);
  } else {
    log(`hello ${name}`);
  }
}
hello("wsn");
hello("wsn", 19);

// 枚举类型
// 和类型别名的区别：类型别名是在编译时确定的，枚举是在运行时确定的
// 枚举类型： 逻辑含义和真实的值是分开的
// 在编译结果中，枚举会被编译为对象
enum Gender {
  Male = "帅哥",
  Female = "美女",
}
// 数字枚举的值会自增
enum Gender2 {
  Male, // 0
  Female, // 1
}
// Male: 0
// Female: 1
// 0: Male
// 1: Female
// 知识点  const obj = {} obj['a'] = 0 这种赋值会有返回值，返回值为0（要赋的值）
// 最佳实践
// 1. 尽量不要在一个枚举中即出现数字枚举，又出现字符串枚举
// 2. 尽量使用枚举的逻辑名称
// 枚举的位运算
enum Permission {
  Read = 1 << 0,
  Write = 1 << 1,
  Delete = 1 << 2,
  Admin = Read | Write | Delete,
}
const permission = Permission.Read | Permission.Write;
log(permission);

// 简单类型系统
// 支持泛型的类型系统
// 支持类型编程的类型系统（对泛型和其他类型进行编程） 对传入的类型参数（泛型）做各种逻辑运算，产生新的类型，这就是类型编程。
