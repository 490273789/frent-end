const map = new Map()
map.set('1', [{count: 1},{count: 23},{count: 43}])
map.set('2', [{count: 2}])
map.set('3', [{count: 3}])
map.set('4', [{count: 4}])

console.log(map);

map.forEach(item => console.log(item))
console.log('--------')
console.log(Array.from(map))