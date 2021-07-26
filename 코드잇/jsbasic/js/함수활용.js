// 01) 문자 개수 세기(https://www.codeit.kr/learn/courses/jquery/653)
// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
  var count = 0;
  for (var i=0; i<word.length; i++) {
    if (word[i].toUpperCase() === ch) {
      count++;
    }
  }

  return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
  // countCharacter 함수와 로직이 중복되어 해당 함수 호출
  return countCharacter(word, 'A');
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));



// 02) 데이터 분석하기(https://www.codeit.kr/learn/courses/jquery/655)
var birthdayData = [
  '20010309전소미',
  '19960828김세정',
  '19991112최유정',
  '19960209김청하',
  '19990719김소혜',
  '19981216주결경',
  '19971201정채연',
  '19991204김도연',
  '19991204강미나',
  '19951218임나영',
  '19990803유연정'
];

function printMinors(arr) {
  var resultArr = [];
    for (var i=0; i<arr.length; i++) {
      if (arr[i].substr(0,4) > 1998) {
        resultArr.push(arr[i]);
      }
    }
    
    var resultString = resultArr.join('\n');
    console.log("미성년자 명단:\n" + resultString);
}

// 테스트 코드
printMinors(birthdayData);