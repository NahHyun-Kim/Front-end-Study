// 할당 연산자 (Assignment operators)
const name = '김나현';
const x = 5;

x = x - 2; //x는 x-2와 같다는 말이 아니라, 오른쪽 값을 왼쪽 변수에 대입

// 복합 할당 연산자(+=, *=, -=, /=, %=)
// 증가(++), 감소(--) 연산자

// 함수 선언 밑 넘겨받는 파라미터 선정 + 템플릿 문자열을 사용한 함수 정의
function logParticipant(userName) {
  console.log(`${userName}(이)가 대화에 참여했습니다.`);
}

// 인자(argument)값을 parameter(함수명 옆)으로 넘겨
// 문자열 벡터에 있는 ${name}값에 전달한다.
logParticipant('김나현');

function square(x) {
  console.log('return 전');
  return x * x;
  console.log('return 후'); //Dead code
}

//return 후라는 것은 실행되지 않음(return문 : 반환 + 함수 중단)
console.log('함수 실행 시작');
console.log(square(3));
console.log('함수 실행 끝');



function printSquare(x) {
  console.log(x * x);
}

function getSquare(x) {
  return x * x;
}

//undefined 출력(이유 : return문을 작성하지 않음)
console.log(printSquare(3));



//옵셔널 파라미터(선택적 선언-미리 값을 지정)
function introduce(name, age, nationality = '한국') {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

//선언할 때 가장 뒤쪽으로 생성 필요(중간에 있을시 생략한 경우 순서가 밀리는 경우가 발생한다.)
introduce('코드잇', 4, '미국'); //값을 모두 전달한 경우 미국으로 출력
introduce('코드잇', 4); //파라미터 값을 생략한 경우 옵셔널 파라미터의 지정된 값인 한국 출력



//Scope : 범위, 영역
function myFunction() {
  //block문 안에 선언된 변수(x는 지역변수)
  let x = 3;
  console.log(x);
}

myFunction();
// console.log(x); 지역변수를 전역변수 범위에서 출력할 시 오류 발생



//상수-const로 표현, const pi 로만 선언해도 오류가 뜨지 않음
//상수로 표현 시 const MY_NUMBER(_을 통해 구별)