// 发布订阅模式是通过观察者模式衍生出来的新的模式
// DOM事件
// Vue组件的更新过程(vue的生命周期)
// 各种的异步回调: setTimeout\setInterval\Promise.then
// MutationObserver

// subject 主题 1个主题
// observer 观察者 多个观察者

class Subject {
  private state: number
  private observer: Observer[] = []
  
  // 获取当前状态
  getState(): number {
    return this.state
  }

  // 设置状态
  setState(newState: number) {
    this.state = newState
    this.notify()
  }

  // 添加观察者
  attach(observer: Observer) {
    this.observer.push(observer)
  }

  // 通知观察者状态更新
  private notify() {
    this.observer.forEach(observer => observer.update(this.state))
  }
}


class Observer {
  name: string
  constructor(name) {
    this.name = name
  }

  update(state: number) {
    console.log(`${this.name} update state is ${state};`)
  }
}

const sub  = new Subject()

const observer1 = new Observer('A')
sub.attach(observer1)

const observer2 = new Observer('B')
sub.attach(observer1)

sub.setState(1)