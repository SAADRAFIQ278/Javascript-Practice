// let student = {
//     name: "Saad",
//     age: 20,
//     city: "peshawer"
// }
// student.age = 21;
// student.course = "JavaScript"


// console.log(student.name);
// console.log(student.age);
// console.log(student.city);
// console.log(student.course);


// let student = {
//     name: "Saad",
//     age: 21
// };
// student.city = "Peshawer";
// student.course = "JavaScript";

// console.log(student.course);

// let student = {
//     name: "Saad",
//     age: 21,
//     city: "Peshawar"
// };
// delete student.age;

// console.log(student);

// let student = {
//     name: "Saad",
//     age: 21,
//     city: "Peshawar"
// };
// console.log(student["city"]);

// let student = {
//     name: "Saad",
//     age: 21
// };
// function introduce(student) {
//     return "My name is " + student.name + " and i am " + student.age + " years old ";

// }
// let result = introduce(student)
// console.log(result);

// let student = {
//     name: "Saad",
//     age: 21
// };
// function increaseAge(student) {
//    student.age = student.age + 1 ;
//    return student.age ;
// }
// let result = increaseAge(student)
// console.log(result);

// let student = {
//     name: "Saad",
//     age: 21,
//     skills: ["HTML", "CSS", "JavaScript"]
// };

// console.log(student.skills[2]);


// let student = {
//     name: "Saad",
//     age: 21,
//     address: {
//         city: "Peshawar",
//         country: "Pakistan"
//     }
// };
// console.log(student.address.city);


// let person = {
//     name: "Saad",

//     greet: function () {
//         return ("hello " + person.name);

//     }

// }
// console.log(person.greet());

// let person = {
//     name : "Saad",

//     introduce: function(){
//         return "my name is " + this.name;
//     }
// }
// console.log(person.introduce());

// let calculater = {
//     num1: 10,
//     num2: 20,

//     add: function () {
//         return this.num1 + this.num2;
//     }
// }

// console.log(calculater.add());


// let student = {
//     name: "Saad",
//     age: 21,
//     course: "JavaScript"
// };
// console.log(Object.keys(student));

// let student = {
//     name: "Saad",
//     age: 21,
//     course: "JavaScript"
// };
// console.log(Object.keys(student).length);

// let student = {
//     name: "Saad",
//     age: 21,
//     course: "JavaScript"
// };
// console.log(Object.values(student));


// let student = {
//     name: "Saad",
//     age: 21,
//     course: "JavaScript"
// };
// console.log(Object.values(student).length);

// let student = {
//     name: "Saad",
//     age: 21,
//     course: "JavaScript",
// };
// console.log(Object.entries(student));

// let student = {
//     name: "Saad",
//     age: 21,
//     course: "JavaScript"
// };
// for (let key in student) {
//     console.log(key);

// }

// let student = {
//     name: "Saad",
//     age: 21,
//     course: "Javascript"
// };
// for (let key in student) {
//     console.log(student[key]);

// }

// let person = {
//     name: "Saad",
//     age: 21,
// }
// for (let key in person) {
//     console.log(key);

// }

// let person = {
//     name: "Saad",
//     age: 21
// };
// for (let key in person) {
//     console.log(key, ":", person[key]);

// }

// let person = {
//     name: "Saad",
//     age: 21,
//     city: "Peshawar"
// };

// let { name, age } = person
// console.log(name);
// console.log(age);


// let person = {
//     name: "Saad",
//     age: 21
// };

// let newPerson = {...person}
// console.log(newPerson);

