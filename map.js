// let number =[5,10,15];
// let double = number.map(function(number){
//     return number * 2
// })
// console.log(double);

// let numbers = [2, 4, 6, 8];
// let square = numbers.map(function(numbers){
//     return numbers * numbers
// })
// console.log(square);

// let prices = [100, 200, 300, 400];
// let newprice = prices.map(function(prices){
//     return prices + 50;
// })
// console.log(newprice);


// let mark = [50, 60, 70, 80];
// let newmark = mark.map(function(mark){
//     return mark + 10;
// })
// console.log(newmark);


// let product = [
//     { name: "T-Shirt", price: 2000 },
//     { name: "Jeans", price: 3000 },
//     { name: "Hoodie", price: 4000 }
// ];
// let productPrice = product.map(function(product){
//     return product.price
// })
// console.log(productPrice);


let product = [
    { name: "T-Shirt", price: 2000 },
    { name: "Jeans", price: 3000 },
    { name: "Hoodie", price: 4000 }
];

let updateProduct = product.map(function(product){
    return product.name + " : "+ product.price
})
console.log(updateProduct);
