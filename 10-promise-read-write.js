let fs = require('fs')
let fileName = 'input.txt'
let writeFileName = '06.txt'

let checkStat = () => {
    fs.readFile(fileName, function (err, data) {
        console.log('读取文件：', data.toString())
        fs.writeFile(writeFileName, data.toString(), function (err) {
            if (err) {
                console.log('写文件出错：', err)
            }
            console.log('写文件成功!')

            fs.stat(writeFileName, function (err, stats) {
                if (err) {
                    console.log('文件状态出错：', err)
                }
                console.log('文件状态：', stats)
            })
        })
    })
}

//checkStat()

let readFilePromise = () => {
    return new Promise(((resolve, reject) => {
        try {
            fs.readFile(fileName, function (err, data) {
                console.log('读取文件：', data.toString())
                resolve(data.toString())
            })
        } catch (e) {
            reject(e)
        }
    }))
}

let writeFilePromise = (data) => {
    return new Promise(((resolve, reject) => {
        fs.writeFile(writeFileName, data.toString(), function (err) {
            if (err) {
                reject(err)
            } else {
                resolve('写入成功！')
            }
        })
    }))
}

let readStatPromise = () => {
    return new Promise(((resolve, reject) => {
        fs.stat(writeFileName, function (err, stats) {
            if (err) {
                reject(err)
            } else {
                resolve(stats)
            }
        })
    }))
}

//如果想用promise
let checkStat2 = async () => {
    try {
        let data = await readFilePromise()
        let res = await writeFilePromise(data)
        console.log('res:', res)
        let stat = await readStatPromise()
        console.log('stat:', stat)
    } catch (e) {
        console.log(e)
    }
}
checkStat2()