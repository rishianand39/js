
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




// FOREACH

const fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function(fruit) {
  console.log('I love ' + fruit);
});

// Output:
// I love apple
// I love banana
// I love orange





// INDEXOF

const secondfruits = ['apple', 'banana', 'orange'];

const bananaIndex = secondfruits.indexOf('banana');
console.log(bananaIndex); // Output: 1




// SLICE

const thirdfruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

const selectedFruits = thirdfruits.slice(1, 4);
console.log(selectedFruits); // Output: ['banana', 'orange', 'grape']




// SORT

const newnumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

newnumbers.sort(function(a, b) {
  return a - b;
});

console.log(newnumbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]





// CONCAT
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];

const combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 'a', 'b', 'c']




// SPLICE

const nextfruits = ['apple', 'banana', 'orange', 'grape'];

// Remove 2 elements starting from index 1, and add 'kiwi' and 'melon' at that position
nextfruits.splice(1, 2, 'kiwi', 'melon');

console.log(nextfruits);




// UNSHIFT

const okfruits = ['banana', 'orange'];

// Add 'apple' and 'kiwi' to the front of the array
okfruits.unshift('apple', 'kiwi');

console.log(okfruits); // Output: ['apple', 'kiwi', 'banana', 'orange']




// SHIFT

const shiftfruits = ['apple', 'kiwi', 'banana', 'orange'];

// Remove and get the first fruit from the array
const firstFruit = shiftfruits.shift();

console.log(firstFruit); // Output: 'apple'
console.log(shiftfruits); // Output: ['kiwi', 'banana', 'orange']





// INCLUDES

const INCLUDEfruits = ['apple', 'kiwi', 'banana', 'orange'];

// Check if 'kiwi' is in the array
const hasKiwi = INCLUDEfruits.includes('kiwi');

console.log(hasKiwi); // Output: true





// REVERSE

const ORInumbers = [1, 2, 3, 4, 5];

// Reverse the order of numbers
ORInumbers.reverse();

console.log(ORInumbers); // Output: [5, 4, 3, 2, 1]




// JOIN

const joifruits = ['apple', 'kiwi', 'banana', 'orange'];

// Join the fruits into a single string separated by ', '
const joinedString = joifruits.join(', ');

console.log(joinedString); // Output: 'apple, kiwi, banana, orange'
