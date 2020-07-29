class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log(`大家好，我的姓名是：${this.name},年龄：${this.age}`)
    }
}

let hsw = new Person('渣渣辉', 45)
hsw.sayHello()

class xiaoDi extends Person {
    constructor(name, age) {
        super(name, age);
        /*this.name = name
        this.age = age*/
    }

    sayHello() {
        console.log(`大家好，我的姓名是：${this.name},年龄：${this.age},人狠话不多`)
    }
}

let xiaodi = new xiaoDi('箭头东哥', 26)
xiaodi.sayHello()