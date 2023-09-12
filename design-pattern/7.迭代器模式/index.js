// 简单的for循环不是迭代器
// 迭代器就是为了解决for循环的问题
// 顺序访问有序的结构（数组，类数组）
// 高内聚、低耦合

// 实现一个迭代器
class Iterator {
  data = []
  index = 0
  constructor(data) {
    this.data = data
  }

  next() {
    if(this.hasNext()) return this.data[this.index++]
    return null
  }

  hasNext() {
    return this.index < this.data.length ? true : false
  }
}

class Data {
  data = [10, 20, 30, 40]
  getIterator() {
    return new Iterator(this.data)
  }
}

const data = new Data()
const dataIterator = data.getIterator()

while(dataIterator.hasNext()) {
  console.log(dataIterator.next())
}

// es6实现