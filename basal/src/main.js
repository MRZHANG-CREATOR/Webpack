const index = require('./index')
import './css/index.css';
import './less/index.less'
import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
console.log(456)
console.log(index.name)
setTimeout(function (){
    console.log('function延迟执行')
})
setTimeout(()=>{
    console.log('箭头函数延迟执行')
})
class Person {
    constructor(name){
        this.name =name
    }
}
//
class Dog{
    name ="大黄";
    static color = 'yellow'
}
let d = new Dog;
console.log(d);
console.log(Dog)

function*newFn(){
    yield 1;
    yield 2;
    return 3
}
let fn = newFn()
console.log(fn.next())
console.log(fn.next())
console.log(fn.next())
console.log(fn.next())

let arr  = ['888']
arr.includes('888')