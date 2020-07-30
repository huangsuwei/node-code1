//node内置的读取文件的模块
let fs = require('fs')

let fileName = 'input.txt'

//先测试同步读取文件
let data = fs.readFileSync(fileName, 'utf-8')
console.log('同步执行文件：', data)

//同步写文件
//a文件名，b数据 writeFileSync(path, data, options)
fs.writeFileSync('./2.txt', data.toString())
console.log('同步写文件：', data.toString())

//异步写文件 writeFile(path, data, options, callback)
fs.writeFile('./3.txt', data.toString(), function (res) {
    if (res) {
        console.log('异步写文件到3.txt失败！', res)
        return
    }
    console.log('异步写文件到3.txt成功！')
})

console.log('异步写文件到3.txt...')

//读取文件状态
let stat = fs.statSync('./2.txt')
console.log(stat)
