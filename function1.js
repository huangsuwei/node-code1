function Add(a, b) {
    return a + b
}

let c = Add(3, 4)
console.log('c:', c)

let add = (a, b) => a + b
console.log(add(3, 5))

//默认值需要靠右，与php类似，但是不会强制
function print(name, address = '上海') {
    console.log(`name:${name}, address:${address}`)
}

print('huang')