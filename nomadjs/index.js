console.log('Im Working. Im JS.');

// /*String
// const what = "NH";

// console.log(what); */

// //true 1, false 0 (boolean true or false)
// const wat = true;

// //Number
// const num = 12;

// // Float
// const fl = 55.1;

//Array(규칙 - 배열명[번째수]) - 변수, 텍스트, 불린, 다양하게 넣을 수 있음
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

console.log(daysOfWeek);

const nhInfo = {
    name: "NH",
    age: 24,
    gender: "Female",
    isPretty: true,
    favSingers: ["GIdle", "IU"],
    favFood: [
        { name: "potato", fatty: false }, 
        { name: "kalguksu", fatty: true }
    ]
}

console.log(nhInfo.gender);
console.log(nhInfo);

console.log(nhInfo.favFood[0].fatty);