// let fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Orange");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);

// }

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// fruits.pop();
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);

// }

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.unshift("Strawberry");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);

// }

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.shift();
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);

// }

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// fruits.splice(2, 1);
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);

// }

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.splice(2, 1, "Grapes");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);

// }

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// let selected = fruits.slice(1, 3);
// for (let i = 0; i < selected.length; i++) {
//     console.log(selected[i]);

// }

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// let selected = fruits.slice(fruits.length - 2);
// for (let i = 0; i < selected.length; i++) {
//     console.log(selected[i]);

// }

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// let found = false;
// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] == "Orange") {
//         found = true;
//     }
// }
// if (found) {
//     console.log("Orange found");

// } else {
//     console.log("Orange not found");

// }

// 

// let numbers = [10, 20, 10, 30, 10, 40, 50];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == 10) {
//         count += 1;
//     }
// } console.log(count);

// let numbers = [10, 25, 15, 40, 30, 5, 50];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 20) {
//         count += 1;

//     }
// } console.log(count);

// let numbers = [5, 12, 8, 21, 30, 7];
// let result = [];
// for(let i = 0; i < numbers.length ; i++){
//     if(numbers[i] > 10){
//         result.push(numbers[i])
//     }
// }console.log(result);

// let numbers = [10, 15, 22, 31, 40, 47, 50];
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         result.push(numbers[i])
//     }
// } console.log(result);

// let numbers = [10, 15, 22, 31, 40, 47, 50];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         sum += numbers[i]
//     }
// } console.log(sum);

// let numbers = [10, 15, 22, 31, 40, 47, 50];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 != 0) {
//         sum += numbers[i]
//     }
// } console.log(sum);

// let numbers = [5, 12, 8, 21, 30, 7, 45];
// let count = 0;
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 20) {
//         count += 1;
//         result.push(numbers[i]);
//     }
// } console.log(result);
// console.log(count);

// let numbers = [12, 45, 7, 89, 23, 56];
// let largest = numbers[0];
// let largestIndex = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//         largestIndex = i;

//     }
// } console.log("largest :", largest);
// console.log("index :", largestIndex);


// let numbers = [34, 12, 56, 7, 89, 23];
// let smallest = numbers[0];
// let smallestIndex = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//         smallestIndex = i
//     }
// } console.log("Smallest number :", smallest);
// console.log("Index :", smallestIndex);

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// let count = 0;
// let average = sum / numbers.length;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     count += 1;
//     average = sum / numbers.length
// }
// console.log(sum);
// console.log(count);
// console.log(average);

// let numbers = [-5, 10, -3, 20, 0, -8, 15];
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         result.push(numbers[i]);

//     }
// } console.log(result);

// let numbers = [-5, 10, -3, 20, 0, -8, 15];
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         result.push(numbers[i])
//     }
// }
// console.log(result);

// let numbers = [5, 12, 0, 21, 30, 0, 7];
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == 0) {
//         result.push(numbers[i])
//     }
// } console.log(result);

// let numbers = [-5, 10, -3, 20, 0, -8, 15];
// let positive = 0;
// let negative = 0;
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         positive += 1;

//     } else if (numbers[i] < 0) {
//         negative += 1;
//     }

// } console.log("Positive :", positive);
// console.log("Negative :", negative);

// let numbers = [-5, 10, -3, 20, 0, -8, 15];
// let positiveSum = 0;
// let negativeSum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         positiveSum += numbers[i];
//     } else if (numbers[i] < 0) {
//         negativeSum += numbers[i];
//     }
// } console.log("positiveSum :", positiveSum);
// console.log("negativeSum :", negativeSum);

// let numbers = [-5, 10, -3, 20, 0, -8, 15];
// let positiveArray = [];
// let negativeArray = [];

// for(let i = 0 ;i < numbers.length ; i++){
//     if(numbers[i] > 0){
//         positiveArray.push(numbers[i]);
//     }else if(numbers[i] < 0){
//         negativeArray.push(numbers[i])
//     }
// }console.log("positiveArray :" ,positiveArray);
// console.log("negativeArray :" ,negativeArray);

// let numbers = [10, 20, 30, 40, 50, 60];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (numbers[i] == 40) {
//         break;
//     }

// }

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// for(let i = 0; i < fruits.length; i++){
//     if(fruits[i] === "Mango"){
//         console.log("Mango found");
//         break ;
        
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i, j);
//     }
// }

let numbers = [10, 20, 30];
for(let i=0;i<numbers.length;i++){
    for(let j=0 ; j<2;j++){
        
      console.log(numbers[i]);  
    }
}