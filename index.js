const arrayOfObjects = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

console.dir(arrayOfObjects);
const startTime = Date.now();
let count = 0;
for (let i = 0; i < 1000000; i++) {
  count++;
}
const endTime = Date.now();
const timeTaken = endTime - startTime;

console.log(startTime, endTime, timeTaken, "ms");

console.time("myTimer");
// Code to be timed
for (let i = 0; i < 10000; i++) {
  count++;
}
console.timeEnd("myTimer");
console.clear();
function foo() {
  return {
    value: 42,
  };
}
console.log(foo()); // Outputs 'undefined' because of ASI
