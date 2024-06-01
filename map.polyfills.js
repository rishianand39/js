// mimic map

let array = [1, 2, 3, 4, 5];

// array.map((element)=>{
//     console.log(element*2)
// })
Array.prototype.map = null;


if (!Array.prototype.map) {
  Array.prototype.map = function (callBack) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(callBack(array[i], i));
    }
    return newArray;
  };
}
let result = array.map((element) => {
 return element * 2
});
console.log(result)
