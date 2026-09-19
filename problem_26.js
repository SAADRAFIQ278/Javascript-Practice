// let calculate = (a, b, operator) => {
//     if (operator == "+") {
//         return a + b;
//     } else if (operator == "-") {
//         return a - b;
//     } else if (operator == "*") {
//         return a * b;
//     } else if (operator == "/") {
//         return a / b;
//     } else {
//         return "Invalid Operator"
//     }
// }
// let answer = calculate(10, 2, "*");
// console.log(answer);

// let getGrade = (marks) => {
//     if (marks >= 90 && marks <= 100) {
//         return "Grade A";
//     } else if (marks >= 80 && marks <= 89) {
//         return "Grade B";
//     } else if (marks >= 70 && marks <= 79) {
//         return "Grade C";
//     } else if (marks >= 60 && marks <= 69) {
//         return "Grade D"
//     } else if (marks >= 0 && marks <= 59) {
//         return "You are Fail"
//     } else {
//         return "Invalid Marks"
//     }
// }
// let answer = getGrade(90);
// console.log(answer);

// let checkNumber = (num) => {
//     if (num % 2 == 0 && num > 0) {
//         return "Positive Even";
//     } else if (num % 2 != 0 && num > 0) {
//         return "Positive Odd";
//     } else if (num % 2 == 0 && num < 0) {
//         return "Negative Even";
//     } else if (num % 2 != 0 && num < 0) {
//         return "Negative Odd";
//     } else {
//         return "Zero";
//     }
// }
// let answer = checkNumber(10);
// console.log(answer);

// let loginStatus = (userName, password) => {
//     if (userName == "admin" && password == "1234") {
//         return "Login Successful";
//     } else if (userName == "admin" && password != "1234") {
//         return "Incorrect Password";
//     } else {
//         return "Invalid userName";
//     }
// }
// let answer = loginStatus("admin", "1234");
// console.log(answer);

// let calculateTotal = (price,quantity) => {
//  let  total = price * quantity ;
//     if(total >= 1000){
//         return "Discount Availible" ;
//     }else if (total >= 500 && total < 1000){
//         return "You got little Discount" ;
//     }else {
//         return "NO Discount avalible" ;
//     }
// }

// let answer = calculateTotal(300,2);
// console.log(answer);

// let shippingCost = (cost) => {
//     if (cost >= 5000) {
//         return "Free shipping";
//     } else if (cost >= 2000 && cost < 5000) {
//         return "Shipping cost will be 200";
//     } else if (cost > 0 && cost < 2000) {
//         return "shipping cost will be 400";
//     } else {
//         return "Invalid cost";
//     }
// }
// let answer = shippingCost(1000);
// console.log(answer);

// let checkLogin = (userName , password) => {
//     if (userName == "Saad" && password == "12345"){
//       return  "Welcome Saad" ;
//     }else if (userName == "Saad" && password != "12345"){
//         return "Incorrect password " ;
//     }else {
//         return "Incoorect username" ;
//     }
// }
// let answer = checkLogin("Saad","1234");
// console.log(answer);



// Salary 100000 ya zyada → "High Salary"
// Salary 50000–99999 → "Good Salary"
// Salary 30000–49999 → "Average Salary"
// Salary 30000 se kam but 0 se zyada → "Low Salary"
// 0 ya negative → "Invalid Salary"

// let calculateSalary = (salary) => {
//     if (salary >= 100000 ){
//         return "High Salary" ;
//     }else if (salary >= 50000 && salary <= 99999){
//         return "Good Salary" ;
//     }else if (salary >= 30000 && salary <= 49999){
//         return "Average Salary" ;
//     }else if (salary > 0 && salary < 30000){
//         return "Low Salary" ;
//     }else {
//         return "Invalid Salary"
//     }
// }
// let answer = calculateSalary(33330)
// console.log(answer);





