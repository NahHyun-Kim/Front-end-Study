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

logParticipant('김나현');