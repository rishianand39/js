// mimic forEach

let array = [1, 2, 3, 4, 5];

array.forEach((element)=>{
    console.log(element*2)
})
Array.prototype.forEach = null;


if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callBack) {
    for (let i = 0; i < array.length; i++) {
      callBack(array[i], i);
    }
  };
}
// array.forEach((element) => {
//   console.log(element * 2);
// });
