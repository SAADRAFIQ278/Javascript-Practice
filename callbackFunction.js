// function sayHello() {
//     console.log("Hello Saad");

// }
// function runFunction(callBack) {
//     callBack()
// }
// runFunction(sayHello)

// function greet(name){
//     console.log("hello " + name);

// }
// function runProcess(unknown){
//     unknown("saad")
// }
// runProcess(greet)

// function add(a, b) {
//     console.log(a + b);

// }
// function output(callBack) {
//     callBack(10, 20)
// }
// output(add)

// function sayHi() {
//     console.log("Hi");
// }

// function start(callback) {
//     callback()
// }
// start(sayHi)

// function greet() {
//     console.log("Hello Saad");
// }

// function run(callback) {
//      callback()
// }
// run(greet)

// function greet(name) {
//     console.log("Hello " + name);
// }

// function run(callback) {
//      callback("Saad")
// }
// run(greet)

// function add(a, b) {
//     console.log(a + b);
// }

// function calculate(callback) {
//     callback(10,20)
// }

// calculate(add);

// let multiply = (a, b) => {
//     return a * b;
// };

// function calculate(callback) {
//       return callback(4,5)
// }
// let result = calculate(multiply)
// console.log(result);


// function subtract(a, b) {
//     return a - b;
// }

// function calculate(callback) {
//   return callback(10,5)
// }

// let result = calculate(subtract);

// console.log(result);


function square(number) {
    return number * number;
}

function calculate(callback) {
 return callback(6)
}

let result = calculate(square);

console.log(result);