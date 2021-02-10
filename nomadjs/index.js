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

//built-in function, 내장 함수
console.log(console);

//parameter potato : 파라미터
function sayHello(potato, chicken){
    console.log('Hello!', potato, "you have", chicken);
}

//argument, 변수 NH값을 potato에 넣음.
sayHello("NH", 15000);
console.log();

function myIntroduce(name, age) {
    return `Hello ${name} you are ${age} years old`;
}

//myIntroduce 함수의 리턴값인 것임(실행시 hello..이런게 나옴)
//실행된 결과 값인데, function안에 console.log를 쓰고 실행하면 undefined가 뜬다
const greetNicolas = myIntroduce("NH", 14);

console.log(greetNicolas);

//calculator 객체 안에 plus 함수 선언 -> calculator.plus로 접근 가능
const calculator = {
    plus: function(a,b){
        return a + b;
    }
,
    minus: function(a,b){
        return a - b;
    }
,
    multiple: function(a,b){
        return a * b;
    }
,
    divide: function(a,b){
        return a / b;
    }
, 
    power: function(a,b){
        return a ** b;
    }
}

//console.log(myIntroduce)
const plus = calculator.plus(5, 5)
console.log(plus);

const minus = calculator.minus(10, 2)
console.log(plus);

const power = calculator.power(2, 3)
console.log(power);