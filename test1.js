var a = 10
var a = 'hello'

console.log('a:', a)

//let 允许重复赋值
let b = 100
console.log('b:', b)

b = 'hello world'
console.log('b:', b)

//const不允许修改
const c = 200
console.log('c:', c)

const person = {
    name : 'huang',
    age : 12,
    height : 176
}

let {name, age, height} = person
console.log(name, age, height)