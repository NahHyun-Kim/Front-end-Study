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

 
 // length 문자열 길이 반환
 var str = 'Codeit';
 console.log(Str.length);

 // charAt(index) : 해당 index에 있는 문자열 반환(=str[index])
 console.log(str.charAt(2)); // d 반환

 // str.indexOf(searchValue) : str 내에 문자열 searchValue가 포함되어 있는지 확인
 // 포함되면 문자열의 시작 인덱스 반환, 포함되지 않는다면 -1 (가장 처음 찾은 인덱스만 리턴)
 str = 'Hello World!';
 console.log(str.indexOf('e')); 
 console.log(str.indexOf('z')); // 존재하지 않으므로 -1 반환
 console.log(str.indexOf('o')); // 가장 처음으로 o가 나온 index 반환(4)