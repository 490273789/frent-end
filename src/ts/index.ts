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
// 知识点:  const obj = {} obj['a'] = 0 这种赋值会有返回值，返回值为0（要赋的值）
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

// 交叉类型 和 联合类型
// 1、& - 交叉类型 - Intersection Types
// 将多个类型合并为一个类型。
// 结果类型包含所有交叉类型的成员

// 2、| 联合类型 - Union Types
// 联合类型表示值可以是多个类型中的一种。
// 值可以被赋值为联合类型中的任何一种类型

// 交叉类型一半用于合并多个类型
// 联合类型一半用于一个变量可以是多种类型中的一种
type A = {
  name1: string;
  name2: number;
};

type B = {
  name3: string;
  name4: number;
};

type Intersection = A & B;
// 这样用无法取值，因为A和B没有任何相同的属性，所以只能取到A和B的公共属性
// 如果想取几个类型中的公共属性，就需要使用交叉类型
type Union = A | B;

const a: Intersection = {
  name1: "1",
  name2: 1,
  name3: "1",
  name4: 1,
};

const b: Union = {
  name1: "1",
  name2: 1,
  name3: "1",
  name4: 1,
};

type C = string;

type D = number;

type E = C | D;

type F = C & D; // never

const c: E = 1;
// const d: F = 1;

// extends 关键字

// 1、继承接口
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}

let dog: Dog = {
  name: "Buddy",
  bark() {
    console.log("Woof!");
  },
};

// 2、泛型约束
function identity<T extends number | string>(arg: T): T {
  return arg;
}

let num = identity(10); // 正确
let str = identity("hello"); // 正确
// let obj = identity({}); // 错误，因为对象类型不满足约束条件

// 3、条件类型中使用，判断类型是否满足对应的条件
type IsString<T> = T extends string ? true : false;

type Result1 = IsString<string>; // true
type Result2 = IsString<number>; // false

// in 操作符的使用 - 主要是用于遍历

// 1、配合keyof 操作符，遍历对象的所有键
// keyof 操作符用于获取一个对象的所有的键名称，返回一个联合类型
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

// 将Person对象中所有的属性变为可选
type PartialPerson = {
  [K in keyof Person]?: Person[K];
};

const person: PartialPerson = {
  name: "John",
  age: 30,
};

// 2、遍历枚举类型

enum Colors {
  Red,
  Green,
  Blue,
}

for (let color in Colors) {
  if (isNaN(Number(color))) {
    console.log(color); // 输出枚举的名称，如 "Red", "Green", "Blue"
  }
}

// 一些用法
type T<S, A> = number extends A["length" & keyof A] ? S : never;

const t: T<number[], number[]> = [12, 23];
console.log("[ t ] >", t);
