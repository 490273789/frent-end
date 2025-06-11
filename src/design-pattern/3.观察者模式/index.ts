// 应用场景
// 1、DOM事件
// 2、Vue组件的更新过程(vue的生命周期)
// 3、各种的异步回调: setTimeout\setInterval\Promise.then
// 4、MutationObserver

// 发布订阅模式是通过观察者模式衍生出来的新的模式

// subject 主题 1个主题
// observer 观察者 多个观察者

class Subject {
  #state: number = 0; // 主题状态
  #observer: Observer[] = [];

  // 获取当前状态
  getState(): number {
    return this.#state;
  }

  // 设置状态
  setState(newState: number) {
    this.#state = newState;
    this.notify();
  }

  // 添加观察者
  attach(observer: Observer) {
    this.#observer.push(observer);
  }

  // 通知观察者状态更新
  private notify() {
    this.#observer.forEach((observer) => observer.update(this.#state));
  }
}

class Observer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  update(state: number) {
    console.log(`${this.name} update state is ${state};`);
  }
}

const sub = new Subject();

const observer1 = new Observer("A");
sub.attach(observer1);

const observer2 = new Observer("B");
sub.attach(observer2);

sub.setState(1);
