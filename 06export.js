
function printHello() {
    console.log('hello !')
}

function printHello1() {
    console.log('hello1 !')
}

let ex = {
    printHello,
    printHello1
}

module.exports = ex

/*
module.exports = ex = {
    printHello,
    printHello1
}*/
