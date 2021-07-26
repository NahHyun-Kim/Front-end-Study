 // Math.abs(x) : x의 절대값 리턴
 console.log(Math.abs(-10));

 // Math.max(여러 숫자들), min : 가장 큰 값 / 작은 값 리턴
 console.log(Math.max(2, -1, 4, 5, 0)); // -1 반환
 console.log(Math.min(2, -1, 4, 5, 0)); // 5 반환

 // Math.pow(n의 m승) : n의 m승 리턴
 console.log(Math.pow(2, 3));

 // Math.sqrt(x) : x의 제곱근 리턴 (ex 25 -> 5 반환)
 console.log(Math.sqrt(25));

 // Math.round(x) :반올림한 값 리턴
 console.log(Math.round(2.49));

 // Math.floor, ceil(x) : 버림 값 / 올림 값 리턴
 console.log(Math.floor(2.4)); // 2 반환
 console.log(Math.ceil(2.8)); // 3 반환

 // Math.random() : 0 이상 1 미만의 값을 랜덤으로 리턴
 console.log(Math.random());

 /*****************************************************************************************/
 // String 메소드
 // length 문자열 길이 리턴
 var str = 'Codeit';
 console.log(Str.length);

 // charAt(index) : 해당 index에 있는 문자열 리턴(=str[index])
 console.log(str.charAt(2)); // d 반환

 // str.indexOf(searchValue) : str 내에 문자열 searchValue가 포함되어 있는지 확인
 // 포함되면 문자열의 시작 인덱스 반환, 포함되지 않는다면 -1 (가장 처음 찾은 인덱스만 리턴)
 str = 'Hello World!';
 console.log(str.indexOf('e')); 
 console.log(str.indexOf('z')); // 존재하지 않으므로 -1 반환
 console.log(str.indexOf('o')); // 가장 처음으로 o가 나온 index 반환(4)
 // str.lastIndexOf : 가장 뒤에 위치한 검색 결과 리턴
 console.log(str.lastIndexOf('o')); 

 // str.toUpperCase() / toLowerCase() : 대문자/소문자로 변환
 str = 'Codeit!';
 console.log(str.toUpperCase());
 console.log(str.toLowerCase());

 // str.substring(index시작, [index끝-1]);
 str = 'Hello World';
 console.log(str.substring(2, 5)); // index 2에서 4(5 전)까지 자른 llo 반환
 console.log(str.substring(2)); // index 2에서 끝까지 자른 llo World! 반환

 // str.substr(start, length) : 시작점 index부터 해당하는 길이만큼 잘라서 반환
 console.log(str.substr(2, 5)); // llo W(index 2부터 5개 반환)

 // str.trim() : str 앞 뒤에 있는 공백을 모두 지운 문자열 반환
 str = '        Hello World!    ';
 console.log(str.trim());

/*****************************************************************************************/
// Array 메소드
var foods = ['fries', 'potato', 'salmon'];
// indexOf('item') : 해당 item이 들어간 인덱스 반환
console.log(foods.indexOf('potato'));

// array.push(item) : 해당 배열 끝에 요소 추가
foods.push('chicken');
console.log(foods);

// array.pop() : 마지막 요소 배열에서 제거
foods.pop();
console.log(foods);

// array.join() : 배열을 문자열로 바꾸기(parameter : 문자열로 합칠 때 요소 사이에 들어갈 내용)
console.log(foods.join()); // ,로 구분된 문자열 리턴
console.log(foods.join('#')); // #로 이은 문자열 리턴

/*****************************************************************************************/
// Date 메소드
// 객체 만들기
var date = new Date();

// 원하는 날짜로 설정
var date1 = new Date('Jul 26, 2021 03:38:00');
var date2 = new Date('2021-07-26T03:38:00');

var date3 = new Date('2021-07-26');
var date4 = new Date('07/26/2021');
var date5 = new Date('July 26 2021');
var date6 = new Date('Jul 26 2021');

// 날짜 정보 가져오기(.get메소드)
console.log(date.getFullYear); // 4자리수 년도
console.log(date.getMonth()); // 달 (0부터 시작 -> 2라면 3월)
console.log(date.getDate()); // 일
console.log(date.getDay()); // 0 일요일 기준으로 index 처럼 반환(수요일 -> 일월화수 -> 3)
console.log(date.getHours()); // 시간
console.log(date.getMinutes()); // 분
console.log(date.getSeconds()); // 초
console.log(date.getMilliseconds()); // 밀리초
console.log(date.toString()); // Date 객체 시간 문자열로 반환(ex Sat Jun 11 1988 05:25:30 GMT+1000 (KDT))
console.log(date.toLocaleString()); // 배열의 요소를 나타내는 문자열 반환(ex 6/11/1988, 5:25:30 AM)
console.log(date.toLocaleDateString()); // LocaleString 중 Date를 반환(ex 6/11/198)
console.log(date.toLocaleTimeString()); // LocaleString 중 Time을 반환(ex 5:25:30 AM)

// getTime() : 1970.01.01 자정 기준으로 밀리초 값 반환
// 날짜 차이값 계산하기
console.log(date.getTime() + 'ms');
console.log(date.getTime()/1000 + '초');
console.log(date.getTime()/1000/60 + '분');
console.log(date.getTime()/1000/60/60 + '시간');