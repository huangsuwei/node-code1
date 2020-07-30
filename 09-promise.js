
let readFilePromise = new Promise(function (resolve/*成功时调用*/, reject/*失败时调用*/) {
    fs.readFile(fileName, function (err, data) {
        if (err) {
            reject(err)
        }
        //console.log('异步执行文件：', data.toString())
        resolve(data.toString())
    })
})

readFilePromise.then(res => {
    console.log('res:', res)
}).catch(err => {
    console.log('err:', err)
})