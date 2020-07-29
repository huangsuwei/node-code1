//node内置的读取文件的模块
let fs = require('fs')

let fileName = 'input.txt'

//先测试同步读取文件
let data = fs.readFileSync(fileName, 'utf-8')
console.log('同步执行文件：', data)

//异步读取文件
fs.readFile(fileName, function (err, data) {
    if (err) {
        console.log('异步执行文件出错：', err)
        return
    }
    console.log('异步执行文件：', data.toString())
})

console.log('异步读取数据：', 22222)