// let number = [5, 10, 15, 20];
// let total = number.reduce(function(sum , number){
//     return sum + number;   
// }, 0)
// console.log(total);

// let number = [3, 7, 10, 5];
// let total = number.reduce(function(sum,number){
//     return sum + number
// },0)
// console.log(total);

// let price = [100, 200, 300, 400];
// let totalPrice = price.reduce(function (sum, price) {
//     return sum + price;
// }, 0)
// console.log(totalPrice);


// let number = [10, 20, 30, 40];
// let total = number.reduce(function(sum,number){
//     return sum + number
// },0)
//  let average = total/number.length ;
//  console.log(average);


// let product = [
//     { name: "T-Shirt", price: 2000 },
//     { name: "Jeans", price: 3000 },
//     { name: "Hoodie", price: 1500 }
// ];
// let totalPrice = product.reduce(function (sum, product) {
//     return sum + product.price
// }, 0)
// console.log(totalPrice);

// let student = [
//     { name: "Ali", marks: 60 },
//     { name: "Saad", marks: 80 },
//     { name: "Ahmed", marks: 70 }
// ];
// let totalMarks = student.reduce(function(sum , student){
//     return sum + student.marks
// }, 0)
// console.log(totalMarks);


// let student = [
//     { name: "Ali", marks: 45 },
//     { name: "Saad", marks: 80 },
//     { name: "Ahmed", marks: 65 },
//     { name: "Usman", marks: 35 }
// ];
// let totalMarks = student.reduce(function(sum,student ){
//     if  (student.marks >= 50 ){ 
//       return sum += student.marks
// }
//     return sum
// }, 0)
// console.log(totalMarks);


let product = [
    { name: "T-Shirt", price: 2000 },
    { name: "Jeans", price: 3500 },
    { name: "Hoodie", price: 1500 },
    { name: "Jacket", price: 5000 }
];
let total = product.reduce(function (sum, product) {
    if (product.price > 2000) {
        return sum += product.price
    }
    return sum;
}, 0)
console.log(total);

