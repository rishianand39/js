// mimic filter

let array = [1, 2, 3, 4, 5];

// array.filter((element)=>{
//     console.log(element*2)
// })

Array.prototype.filter = null;

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callBack) {
    if (this === null) {
      throw new TypeError("Array.prototype.filter called on null or undefined");
    }
    if (typeof callBack !== "function") {
      throw new TypeError(func + " is not a function");
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callBack(array[i], i)) {
        newArray.push(callBack(array[i], i));
      }
    }
    return newArray;
  };
}
let result = array.filter((element) => {
  if (element % 2 === 0) {
    return element;
  }
});
console.log(result);
