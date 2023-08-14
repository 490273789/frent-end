// OOP - Object Oriented Program
// 继承：抽离公共代码，代码复用
// 封装：高内聚，低耦合
// 多态：更好的扩展性

// 封装：可见性修饰符
// public
// protected
// private

// 多态：
// - 重栽 给一个函数定义多个函数类型
// - 重写 重写方法体

// UML 统一的建模语言 Unified Modeling Language

// 关联关系的细化
// 聚合： 整体包含部分，部分可以脱离整体而单独存在
// 组合：整体包含部分，部分不可以脱离整体
// 依赖：不是属性关系，而是函数参数或返回值


// SOLID 五大设计原则
// s 单一职责：
  // 每个程序做好一件事
  // 功能太多了就要拆分
  // 每个部分保持相互独立

// o 开放封闭，
  // 对扩展开放
  // 对修改封闭
  // 需求发生变化时，通过扩展来解决，而非改动
// l 李氏置换原则
  // 子类能覆盖父类
  // 父类能出现的地方，子类也能出现
// i 接口隔离原则
  // 保持接口的单一独立
  // 避免出现胖接口
// d 依赖倒置原则
  // 面相接口编程
  // 而非面相实例

const loadImg = (src) => {
  const promise = new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

const src = 'xxx.png'

const res = loadImg(src)
res.then((img) => {
  console.log(img.width)
  return img
}).then((img) => {
  console.log(img.height)
}).catch(err => console.log(err))

// .then 就是单一指责，没个then中只做一件事情
// 开放封闭原则，来个新需求，我就扩展一个then