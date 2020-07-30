let path = require('path')

let requireJsName = 'D:\\gowork\\node-code1\\06require.js'
let requireJsName2 = 'D://gowork/////node-code1//06require.js'

console.log(path.basename(requireJsName))
console.log(path.extname(requireJsName))
console.log(path.dirname(requireJsName))
console.log(path.join('D:\\gowork', 'node-code1', '06require.js\\'))
console.log(path.normalize(requireJsName2))
//这个是基于当前的执行目录下的文件路径
console.log(path.resolve('06require.js'))