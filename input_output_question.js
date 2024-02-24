const name;  //SyntaxError: Missing initializer in const declaration

function sayHi() {
    console.log(name); // undefined assigned while hoisting
    console.log(age); // ReferenceError: cannot access variable without initilization
    var name = 'Lydia';
    let age = 21;
  }