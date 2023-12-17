// 单例模式 - 全局单一实例
// 常用场景：遮罩层、vuex、redux的store

// TS实现单例模式
class SingleStore {
  // 私有换构造器，使类在外部无法通过new实例化
  private constructor() {}

  private static instance: SingleStore | null

  static getInstance () {
    if(SingleStore.instance === null) SingleStore.instance = new SingleStore()
    return SingleStore.instance
  }
}

const instance1 = SingleStore.getInstance()
const instance2 = SingleStore.getInstance()

console.log(instance1 === instance2)
