//javascript는 ;을 붙이지 않아도, 코드가 실행될 때 자동으로 ;을 붙여주는 기능이 있다.

console.log('Hello Codeit!');

//함수 선언       //파라미터(호출 시 소괄호 안의 값이 파라미터로 전달되어 출력)
function greetings(sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log(sentence);
};

//함수 호출
greetings('Hola');

function welcome(name) {
  console.log('안녕하세요 ' + name + '님');
}

welcome('코드잇');

//여러개의 파라미터 사용
function printSum(num1, num2) {
  console.log(num1 + num2);
};

printSum(10, 5);

function introduce(name, birth, nationality, job) {
  console.log('안녕? 나는 ' + name + birth + nationality + job);
};

introduce('코드잇', '1998.10.22', '한국', '대학생');

//함수의 return문(함수의 output)
function getTwo() {
  //return, 되돌려줄 값 반환값 입력
  return 2;
}

// = console.log(2)와 같다.
console.log(getTwo());

function getTwice(number) {
  return number * 2;
}

const x = getTwice(5);
const y = getTwice(2);
console.log(x * y);

