function callback(records, observer) {
  for(let record of records) {
    console.log('record:',record)
  }
}

const observer = new MutationObserver(callback)

const ele = document.createElement('div')

if(ele) {
  observer.observe(ele, {
    attributes: true, // 监听属性变化
    attributeOldValue: true, // 变化之后记录旧的属性值
    childList: true, // 监听子节点变化（增加删除）
    characterData: true, // 监听节点内容或文本变化
    subtree: true, // 递归监听下级所有节点
  })
}