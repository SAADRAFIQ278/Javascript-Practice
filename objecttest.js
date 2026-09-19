// let user = {
//     name: "Saad",
//     age: 21,
//     city: "Peshawer"
// }
// console.log(user.city);

// let user = {
//     name: "Saad",
//     age: 21,
//     city: "Peshawar"
// };
// user.age = 22;
// console.log(user.age);

// let user = {
//     name: "Saad",
//     age: 22,
//     city: "Peshawar"
// };
// user.profession = "web developer"
// console.log(user.profession);

// let user = {
//     name: "Saad",
//     age: 22,
//     city: "Peshawar"
// };
// delete user.city;
// console.log(user);

// let user = {
//     name: "Saad",
//     skills: ["HTML", "CSS", "JavaScript"]
// };
// console.log(user.skills[2]);

// let user = {
//     name: "Saad",

//     greet: function () {
//         return "Hello " + this.name
//     }
// };
// console.log(user.greet());

// let user = {
//     name: "Saad",
//     profile: {
//         age: 22,
//         city: "Peshawar"
//     }
// };
// console.log(user["profile"]["city"]);


let user = {
    name: "Saad",
    age: 21,
    skills: ["HTML", "CSS", "JavaScript"],

    showSkills: function () {
        return user.name + " knows " + user.skills[2]
    }
}

console.log(user.showSkills());

