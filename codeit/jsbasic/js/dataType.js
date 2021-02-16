/* 데이터 타입-숫자형 : 사칙연산, 거듭제곱(** : 일반 곱셈보다 우선순위 높음),
  나머지(%), 몫 출력(Math.truc..)  */

//문자열 표기("" 안에 '나 "를 넣으려면 ``안에 쓰거나, 앞에 역슬래시(\)를 붙인다.)
console.log('He said \"I\'m Iron man"');
console.log(`He said "I'm Irom man"`);

//불 대수(참 or 거짓, 명제로 표현이 가능한 것)
/* 숫자비교 같다(=== : 자료형까지 비교), 같지 않다(!==) 
And 연산(&&) , Or 연산(||) , Not 연산(!)*/

//typeof 연산자- 우선순위가 높음(String형태 반환)ㄴ(typeof 값)
console.log(typeof 'codeit');
console.log(typeof true);
function sayHello() {
  console.log('Hello');
};

console.log(typeof sayHello);
//연산의 우선순위가 있기 때문에 괄호를 통해 묶어서 표현
console.log(typeof ('Hello' + 'codeit'));
/* 우선순위(괄호, !(not), typeof, **, 사칙연산, <...., 논리형(and&or), 할당) */



//형 변환(Type Conversion) - 산술기호(+ 를 제외, 대부분 숫자형으로 변환)
//문자열로 바꾸고 싶을땐 String, Number, Boolean...
console.log(Number('10') + Number('5'));
//불린 -> 숫자
let fal = false;
console.log(fal); //false 출력
console.log(Number(fal)); //Number형태로 형변환(0)
console.log(typeof fal); //typeof 형태인 boolean 을 출력
console.log(typeof Number(fal)); //0의 형태인 number 를 출력

//문자 -> 불린(불린형 형변환시 '', 0, NaN만 false로(falsy)형변환, 그 외 문자열이 있으면 true가 반환된다.)
let str = '문자'; 
console.log(Boolean(str)); //true 출력(문자를 boolean으로 변환 시 true가 출력됨)
console.log(typeof Boolean(str)); //true의 typeof인 boolean 을 출력

//산술 연산을 통한 속성 비교 1)산술 연산
console.log(4 + '2'); //42출력, js의 +는 String기능이 좀더 강함(문자열로 출력)
console.log(4 - true); //4-true(1) = 3 출력
console.log(4 / '2'); //형변환되어 4/2 = 2 출력
console.log('4' ** true); //true(불린형, 1) 4의 1제곱 = 4 출력
console.log(4 % 'two'); //NaN과의 연산은 어떤 것을 해도 NaN이 나옴. 

//산술 연산을 통한 속성 비교 2)관계 비교 연산
//숫자형으로 바꿔 비교하는 것이 일반적
console.log('two' >= 1); //비교가 불가능인 경우에도 false 출력
console.log('2' <= false); // 2 <= 1 = false 출력

//산술 연산을 통한 속성 비교 3)같음 비교 연산-===, !==, ==, !=
//복잡한 코드 작성 시 형변환이 일어나면 예상치 못한 변수가 생길 수 있으므로, 비교 시 ===, !== 사용 권장
console.log(1 === '1'); // 일치, 불일치(!==) false
console.log(1 === true); // false

console.log(1 == '1'); //동등, 부등(!=) *동등 비교는 숫자형으로의 형변환이 일어난다.
console.log(1 == true); //true

//템플릿 문자열(``, ${}을 이용해 출력)
const year = 1998;
const month = 10;
const day = 22;
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

let myNumber = 3;

function getTwice(x) {
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);

//null, undefined(값이 없다) 
//1) null(값이 없다는 것을 의도적으로 표현할 때)
//2) undefined(실행 시 값이 없다는 것을 표시-처음부터 값이 없음)
/* const codeit;
console.log(codeit); //undefined 오류(선언 후 값을 지정하지 않았음) */

const codeit = null;
console.log(codeit); //의도적으로 없다는 의미를 지정할 때 사용, ex 물을 부은 후 마심(null)

console.log(null == undefined); //true
console.log(null === undefined); //false(다른 자료형)