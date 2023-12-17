interface IProduct {
  name: string
  fn1: () => void
  fn2: () => void
}

class Product1 implements IProduct {
  name: string
  constructor(name: string) {
    this.name = name
  }
  fn1 () {
    console.log('Product1 fn1')
  }

  fn2 () {
    console.log('Product1 fn2')
  }
}
class Product2 implements IProduct {
  name: string
  constructor(name: string) {
    this.name = name
  }
  fn1 () {
    console.log('Product2 fn1')
  }

  fn2 () {
    console.log('Product2 fn2')
  }
}

class Creator {
  // 依赖倒置
  create(type: string, name: string): IProduct {
    if(type === 'p1') return new Product1(name)
    if(type === 'p2') return new Product2(name)
    throw new Error('Invalid type')
  }
}