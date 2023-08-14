// jQuery 的工厂模式内部实现原理

// declare interface Window {
//   $: (selector: string) => jQuery
// }

class jQuery {
  length
  selector
  constructor(selector) {
    const dom = document.querySelectorAll(selector)
    const domList = Array.prototype.slice.call(dom)
    for(let i = 0; i < domList.length; i++) {
      this[i]  = domList[i]
    }
    this.length = domList.length
    this.selector = selector
  }

  // 一些其他的jQuery方法
  addClass(classList) {
    console.log(classList)
    return this
  }
}

window.$ = (selector) => {
  // 其他的判断逻辑。。。。。。

  return new jQuery(selector);
}

 const p = window.$('p').addClass('p-class')
 const div = window.$('div')
 const span = window.$('span')

 console.log('p:', p)
 console.log('div:', div)
 console.log('span:', span)

 


// 最后生成的结构
// const jquery = {
//   length: 3,
//   selector: 'p',
//   1: 'p',
//   2: 'p',
//   3: ''
// }