// 1、不属于传统的23种设计模式，是观察者模式的另一种实现
// 2、发布订阅模式是自己手动触发回调
// 3、观察者是通过改变状态间接出发回调
// 4、观察者：Subject和Observer直接绑定，中间无媒介
// 5、发布订阅：Publisher和Observer互不认识，中间有媒介
// 场景：自定义事件
// postMessage - 网页和iframe的通讯
// 多进程（webworker）通讯、websocket通讯等
// vue2本身就是eventbus
