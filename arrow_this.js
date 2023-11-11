
let user = {
    name : "Rishi Anand",
    age : 23,
    message : function(){
        return console.log(`Have a good day, ${this.name}`)
    }
}
// user.message()
function hi(){
    console.log(this)
}
// hi()
let b = 4
// global.a=5
// console.log(global); 


var a =0 
function foo(){
    this.b++
}
foo()
let c =1
const d = 2