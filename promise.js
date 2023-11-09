let p1 = Promise.resolve(1);
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    return resolve(2);
  }, 1000);
});

let p3 = new Promise((resolve) => {
  setTimeout(() => {
    return resolve(3);
  }, 3000);
});

let p4 = Promise.reject("error4");
let p5 = Promise.reject("error5");

// All Promise succeed

const p11 = Promise.all([p1, p2, p3]).then(console.log).catch(console.log);

// //   2. There is Promise that fails
  const p12 = Promise.all([p1,p2,p4]).then(console.log).catch(console.log)

// // 3. There are two Promise failures
const p13 = Promise.all([p1,p4,p5]).then(console.log).catch(console.log)
