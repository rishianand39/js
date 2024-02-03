
// MAP 

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(num) {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// FILTER

const secondNumber = [1, 2, 3, 4, 5];
const evenNumbers = secondNumber.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// REDUCE

const thirdNumber = [1, 2, 3, 4, 5];

const sum = thirdNumber.reduce(function(accumulator, currentValue, currentIndex) {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator

console.log(sum); // Output: 15

