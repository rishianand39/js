// const arrayOfObjects = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
// ];

// console.dir(arrayOfObjects);
// const startTime = Date.now();
// let count = 0;
// for (let i = 0; i < 1000000; i++) {
//   count++;
// }
// const endTime = Date.now();
// const timeTaken = endTime - startTime;

// console.log(timeTaken, "ms");


// console.time("myTimer");
// // Code to be timed
// for (let i = 0; i < 10000; i++) {
//   count++;
// }
// console.timeEnd("myTimer");
// console.clear();
// function foo() {
//   return {
//     value: 42,
//   };
// }
// console.log(foo()); // Outputs 'undefined' because of ASI


// // HOISTING
// console.clear()
// let rah="10"
// console.log(rah)
// var message="Rishi Come here"
// console.clear()
// console.log(global)
// console.clear()

// let promiseFunction = new Promise((resolve,reject)=>{
//    resolve("Your promise resolved")
// })
// function avc(){
//   promiseFunction.then(res=>{
//     console.log(res)
//   })
//   console.log("console message")
// }
// avc()


console.clear()
let array = [1,2, 3,4,5,6,7,8,9,10,11,12]

let filteredArray = array.filter(item=>item%2 !=0) // create a new array
let newArray = array.map(item => item*2) // create a new array

// FlatMap takes single pass and doesn;t produce intermediate array but filter () and map() combination produces an intermediate array.
let newFlatMap = array.flatMap(item => item % 2 !=0 ? [item * item] : []) // create a new array.. It is combination filter and map inbuilt function 
let forArray = array.forEach(item => item*2) // do not produce an array
console.log("newFlatMap -", newFlatMap)
console.log("forArray -", forArray)
