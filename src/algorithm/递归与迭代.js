/** for循环求和
 * 时间复杂度：和n成线性关系
 */
const forLoop = (n) => {
  let result = 0
  for(let i = 1; i <= n; i++) {
    result += i
  }
  return result
}

console.log('n is 1:', forLoop(1))
console.log('n is 2:', forLoop(2))
console.log('n is 3:', forLoop(3))
console.log('n is 4:', forLoop(4))

const whileLoop = (n) => {
  let result = 0
  let i = 1
  while(i <= n) {
    result += i++
  }
  return result
}
const whileLoop2 = (n) => {
  let result = 0
  while(n > 0) {
    result += n--
  }
  return result
}

console.log('n is 1:', whileLoop(1))
console.log('n is 2:', whileLoop(2))
console.log('n is 3:', whileLoop(3))
console.log('n is 4:', whileLoop(4))

/** 嵌套循环 */
const nestedForLoop = (n) => {
  let result = 0
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      result += `(${i}, ${j}), `
    }
  }

  return result
}

console.log('n is 4:', nestedForLoop(2))

/** 递归 */
const recur = (n) => {
  if(n === 1) return 1
  const result = recur(n - 1)
  return n + result
}

console.log('n is 4:', recur(4))
/** 尾递归 */
const tailRecursion = (n, result) => {
  if(n === 0) result
  return tailRecursion(n - 1, result + n)
}

/** 
 * 斐波那契数列
 * 0，1，1，2，3，5，8
 * 数列中没个数是前两个数的和
 * 第n个数是: f(n) = f(n - 1) + f(n - 2)
 */
const fib = (n) => {
  if(n === 1) return 0
  if(n === 2) return 1
  return fib(n - 1) + fib(n - 2)
}


/**
 * 求和的问题使用模拟栈将递归转化为迭代的形式
 */

const forLoopRecur = (n) => {
  let result = 0;
  const stack = []
  // “递”的过程，入栈操作
  for(let i = 0; i <= n; i++) {
    stack.push(i)
  }
  // “归”的过程，出栈操作
  while(stack.length) {
    result += stack.pop()
  }
  return result
}

console.log("n is 4:", forLoopRecur(4))