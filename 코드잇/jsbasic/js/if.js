//if문(if statement)
let temperature = 0;

if (temperature <= 0) {
  console.log('물이 업니다');
} else if(temperature < 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
} else if(temperature < 150) {
  console.log('물이 모두 수증기가 되었습니다');
} else {
  console.log('물이 끓습니다.');
}


//switch문 (switch statement) - break를 만나기 전까지 모든 조건 출력(break 사용 권장)
//비교시 자동 형변환을 하지 않으므로, 자료형을 정확하게 구분(ex) let myChoice = '2'일 경우 default 문 실행)
let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}


//for문 (loop statement)
for (let i=1; i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`); 
}

function getStar(height) {
  let msg = '';
  for(let i=0; i<height; i++) {
    msg += '*';
    console.log(msg);
  }
}


//while 반복문 (while statement)
let i = 30;

while(i % 7 !== 0) {
  i++;
}

console.log(i); //35출력


//break(break로 switch문 사용, 반복문 내에 break를 검)
//continue
for(let i=1; i<= 10; i++) {
  //1은 2로 나누어떨어지지 않으므로 continue실행 x, 콘솔에 1 출력
  //2일때는 if문의 조건이 만족해서, continue(다음 추가동작인 i++로 넘어가 console.log가 무시)
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

while(i <= 10) {
  if(i%2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// 피보나치 수열
let hap = 0;

let current = 1;
let prev = 0;

for(let i=1; i<=50; i++) {
  console.log(current);
  //임시 변수 temp를 선언하여 값을 먹지 않도록 함
  let temp = prev;
  prev = current;
  current = current + temp;
}